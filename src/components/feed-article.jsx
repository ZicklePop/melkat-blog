import formatDate from '../utils/format-date'
import { cxs } from '../consts/config'

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
  content_html,
  date_published,
  external_url,
  id,
  image,
  tags,
  title,
  url,
}) => {
  return (
    <article className={cx.article}>
      {image && (
        <div
          alt={title}
          aria-label="Preview image"
          className={cx.img}
          role="img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <h2 className={cx.h2}>
        <a href={external_url ? external_url : url} className={cx.a}>
          {title}
        </a>
      </h2>
      <p className={cx.details}>
        <time dateTime={date_published}>{formatDate(date_published)}</time>
      </p>
      <div
        className={cx.body}
        dangerouslySetInnerHTML={{ __html: content_html.split('</p>')[0] }}
      />
      <ul className={cx.ul}>
        <li className={cx.li}>
          <a href={url} className={cx.aHover} title="permalink">
            ★ Permalink
          </a>
        </li>
        {!!tags && <li className={cx.li}>{` • `}</li>}
        {tags.map((tag, i) => (
          <li key={`${id}-${tag}`} className={cx.li}>
            <a href={`/tag/${tag}`} className={cx.aHover}>
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