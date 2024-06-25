import type { CollectionEntry } from "astro:content";

export const byDate = (
	a: CollectionEntry<"posts">,
	b: CollectionEntry<"posts">,
): number => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();

export const byJsonDate = (
	a: { date_published: string | number | Date },
	b: { date_published: string | number | Date },
): number =>
	new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf();

export const byRssDate = (
	a: { pubDate: string | number | Date },
	b: { pubDate: string | number | Date },
): number => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();

export const byCount = (a: { count: number }, b: { count: number }): number =>
	b.count - a.count;
