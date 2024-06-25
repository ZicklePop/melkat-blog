import { getCollection } from "astro:content";
import { baseUrl, title as blogTitle, description } from "@/src/consts/config";
import { noDrafts } from "@/src/utils/filter";
import { byDate } from "@/src/utils/sort";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

export const prerender = true;

const parser = new MarkdownIt();

export async function GET() {
	const posts = await getCollection("posts", noDrafts);
	return rss({
		title: blogTitle,
		description,
		site: baseUrl,
		items: posts.sort(byDate).map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			link: `${baseUrl}/p/${post.slug}`,
			content: `${
				post.data.cover
					? `<img src="${baseUrl}${post.data.cover.src}" alt="${post.data.coverAlt}"/><br/>`
					: ""
			}${sanitizeHtml(parser.render(post.body))}`,
			author: "Melanie Kat",
		})),
	});
}
