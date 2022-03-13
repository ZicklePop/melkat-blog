export const byDate = (a, b) =>
  new Date(b.date).valueOf() - new Date(a.date).valueOf();

export default {
  byDate,
};
