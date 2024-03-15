import { defineDb, defineTable, column } from 'astro:db'

const Meta = defineTable({
  columns: {
    key: column.text({ primaryKey: true }),
    value: column.text(),
    updated: column.date({ default: new Date() }),
  },
})

const Likes = defineTable({
  columns: {
    hash: column.text({ primaryKey: true }),
    slug: column.text(),
    date: column.date({ default: new Date() }),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Meta,
    Likes,
  },
})
