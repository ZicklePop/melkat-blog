import { db, Meta } from 'astro:db'
import { getRandomValues } from '../src/utils/cryptography'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Meta).values({
    key: 'salt',
    value: getRandomValues(),
  })
}
