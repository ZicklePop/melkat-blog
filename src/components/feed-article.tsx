import formatDate from '../utils/format-date'
import getDomain from '../utils/get-domain'
import { cxs } from '../consts/config'

export interface Props {
  date_published: string
  external_url?: string
  id: string
  image?: string
  tags: string[]
  title: string
  url: string
}

const cx = {
  a: cxs.a,
  aHover: cxs.aHover,
  article:
    'pb-8 mb-8 border-solid border-b cv-auto border-black/10 dark:border-white/25',
  body: `${cxs.prose} my-4`,
  details: 'uppercase text-sm my-4',
  h2: 'mb-4 text-xl font-medium',
  img: 'bg-cover aspect-video bg-center h-16 rounded ml-2 mb-2 float-right',
  li: `${cxs.li} pr-1`,
  ul: 'list-none mt-4',
}

const FeedArticle = ({
  date_published,
  external_url,
  id,
  image,
  tags,
  title,
  url,
}: Props) => {
  const domain = !!external_url && getDomain(external_url)
  return (
    <article className={cx.article}>
      {image && (
        <div
          title={title}
          aria-label="Preview image"
          className={cx.img}
          role="img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <h2 className={cx.h2}>
        <a
          href={external_url ? external_url : url}
          className={cx.a}
          aria-label={`${
            !!external_url ? 'Link to ' : 'Permalink for '
          }${title}`}
        >
          {title}
        </a>
      </h2>
      <p className={cx.details}>
        {domain && (
          <a
            href={`/d/${domain}`}
            className={cx.aHover}
            aria-label={`Posts linking to ${domain}`}
          >
            {domain}
          </a>
        )}
        {domain ? ' • ' : ''}
        <time dateTime={date_published}>{formatDate(date_published)}</time>
      </p>
      <ul className={cx.ul}>
        <li className={cx.li}>
          <a
            href={url}
            className={cx.aHover}
            aria-label={`Permalink for ${title}`}
          >
            <span role="img" aria-label="Star icon">
              ★
            </span>{' '}
            Permalink
          </a>
        </li>
        {!!tags && <li className={cx.li}>{` • `}</li>}
        {tags.map((tag, i) => (
          <li key={`${id}-${tag}`} className={cx.li}>
            <a
              href={`/t/${tag}`}
              className={cx.aHover}
              aria-label={`Posts tagged #${tag}`}
            >
              #{tag}
            </a>
            {` `}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FeedArticle