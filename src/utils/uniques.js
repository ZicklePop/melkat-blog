export const uniq = (arr) => [...new Set(arr)];

export const uniqBy = (arr, iteratee) => {
  if (typeof iteratee === "string") {
    const prop = iteratee;
    iteratee = (i) => i[prop];
  }
  return arr.filter(
    (x, i, self) => i === self.findIndex((y) => iteratee(x) === iteratee(y))
  );
};

export default {
  uniq,
  uniqBy,
};
