import { getCollection } from "astro:content";
import { baseUrl, title as blogTitle, description } from "@/src/consts/config";
import { noDrafts } from "@/src/utils/filter";
import { byDate } from "@/src/utils/sort";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

export const prerender = true;

const parser = new MarkdownIt();

export async function GET() {
	const posts = await getCollection("posts", noDrafts);
	return new Response(
		JSON.stringify({
			version: "https://jsonfeed.org/version/1.1",
			title: blogTitle,
			description,
			icon: `${baseUrl}/apple-touch-icon.png`,
			home_page_url: baseUrl,
			feed_url: `${baseUrl}/feed.json`,
			authors: [
				{
					name: "Melanie Kat",
					avatar: `${baseUrl}/apple-touch-icon.png`,
				},
			],
			items: posts.sort(byDate).map((post) => ({
				content_html: `${
					post.data.cover
						? `<img src="${baseUrl}${post.data.cover.src}" alt="${post.data.coverAlt}"/><br/>`
						: ""
				}${sanitizeHtml(parser.render(post.body))}`,
				date_published: post.data.date.toISOString(),
				external_url: post.data.link,
				id: `${baseUrl}/p/${post.slug}`,
				image: post.data.cover ? `${baseUrl}${post.data.cover.src}` : undefined,
				tags: post.data.tags,
				title: post.data.title,
				url: `${baseUrl}/p/${post.slug}`,
			})),
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
