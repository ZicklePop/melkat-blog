export default function truncateMd(md: string, lines: number = 5): string {
  return md.split('\n#')[0].split('\n').slice(0, lines).join('\n')
}
