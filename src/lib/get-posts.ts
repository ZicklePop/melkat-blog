import type { CollectionEntry } from "astro:content";
import countKeys from "./count-keys";
import { hasLink, hasTags } from "./filter";
import getDomain from "./get-domain";
import { uniq } from "./uniques";

// Domains

export const getAllDomains = (posts: CollectionEntry<"posts">[]) =>
	uniq(posts.filter(hasLink).map(({ data: { link } }) => getDomain(link)));

export const getDomainsByCount = (
	posts: CollectionEntry<"posts">[],
): { key: string; count: number }[] => {
	const data: { [key: string]: number } = {};
	for (const {
		data: { link },
	} of posts) {
		if (link) {
			const domain = getDomain(link);
			data[domain] = data[domain] ? data[domain] + 1 : 1;
		}
	}
	return countKeys(data);
};

export const getPostsByDomain = (
	posts: CollectionEntry<"posts">[],
	domain: string,
): CollectionEntry<"posts">[] =>
	posts.filter(
		({ data }: CollectionEntry<"posts">) => getDomain(data.link) === domain,
	);

// Tags

export const getAllTags = (posts: CollectionEntry<"posts">[]) => {
	const filteredPosts = posts.filter(hasTags);
	const allTags: string[] = [];
	for (const {
		data: { tags },
	} of filteredPosts) {
		for (const tag of tags) {
			allTags.push(tag);
		}
	}
	return uniq(allTags);
};

export const getTagsByCount = (posts: CollectionEntry<"posts">[]) => {
	const data: { [x: string]: number } = {};
	for (const {
		data: { tags },
	} of posts) {
		if (tags) {
			for (const tag of tags) {
				data[tag] = data[tag] ? data[tag] + 1 : 1;
			}
		}
	}
	return countKeys(data);
};

export const getPostsByTag = (
	posts: CollectionEntry<"posts">[],
	tag: string,
): CollectionEntry<"posts">[] =>
	posts.filter(({ data }) => data.tags?.includes(tag));

export const getRelatedPosts = (
	posts: CollectionEntry<"posts">[],
	post: CollectionEntry<"posts">,
	limit = 2,
): CollectionEntry<"posts">[] => {
	const hasSimilarTags = (t: string) => post.data.tags.includes(t);
	const tagCounts = (i: number, v: string) => (hasSimilarTags(v) ? i + 1 : i);
	return posts
		.filter(({ id }) => id !== post.id)
		.filter((item: CollectionEntry<"posts">) =>
			item.data.tags.some(hasSimilarTags),
		)
		.sort((a: CollectionEntry<"posts">, b: CollectionEntry<"posts">) => {
			const aCount = a.data.tags.reduce(tagCounts, 0);
			const bCount = b.data.tags.reduce(tagCounts, 0);
			return aCount === bCount ? 0 : aCount < bCount ? 1 : -1;
		})
		.slice(0, limit);
};
