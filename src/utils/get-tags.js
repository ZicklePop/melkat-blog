export const cleanTags = (tags) => tags?.map((tag) => tag?.trim())
export const getTags = (tagsString) =>
  cleanTags(tagsString?.replace(' ', '')?.split(','))

export default getTags
