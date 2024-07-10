import type { CollectionEntry } from "astro:content";

export const noDrafts = ({ data }: CollectionEntry<"posts">) => !data.draft;

export const hasLinkNoDrafts = ({ data }: CollectionEntry<"posts">) =>
	!data.draft && !!data.link;

export const hasTagsNoDrafts = ({ data }: CollectionEntry<"posts">) =>
	!data.draft && !!data.tags;

export const hasLink = ({ data }: CollectionEntry<"posts">) => !!data.link;

export const hasTags = ({ data }: CollectionEntry<"posts">) => !!data.tags;
