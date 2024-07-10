export const uniq = (arr: Iterable<unknown> | null | undefined) => [
	...new Set(arr),
];

export default {
	uniq,
};
