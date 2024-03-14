export function likeLabel(likeCount: number) {
  return `${!!likeCount ? likeCount + ' ' : ''}Like${likeCount > 1 ? 's' : ''}`
}
