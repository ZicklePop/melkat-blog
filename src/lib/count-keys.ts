import { byCount } from "./sort";

export const countKeys = (data: {
	[key: string]: number;
}): { key: string; count: number }[] =>
	Object.keys(data)
		.map((key) => ({ key, count: data[key] }))
		.sort(byCount);

export default countKeys;
