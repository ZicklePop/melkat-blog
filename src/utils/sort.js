export const byDate = (a, b) =>
  new Date(b.date).valueOf() - new Date(a.date).valueOf()

export const byJsonDate = (a, b) =>
  new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf()

export default {
  byDate,
  byJsonDate,
}
