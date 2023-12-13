export default function stripMd(md: string) {
  return md
    .replace(/(#+)(.*)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/^\> (.*)/gm, '“$1”')
    .replace(/_+(.*?)_+/g, '$1')
    .replace(/\*+(.*?)\*+/g, '$1')
    .trim()
}
