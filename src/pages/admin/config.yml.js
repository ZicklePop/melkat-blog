const body = `
backend:
  name: git-gateway
  branch: main
media_folder: "public/img"
public_folder: "img"
collections:
  - name: "blog"
    label: "melkat.blog"
    folder: "src/pages/p"
    create: true
    slug: "{{id}}"
    fields:
      - {label: "Layout", name: "layout", widget: "hidden", default: "../../layouts/post-layout.astro"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "ID", name: "id", widget: "string", hint: "the filename and url slug"}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Cover Image", name: "cover", widget: "image", required: false}
      - {label: "Tags", name: "tags", widget: "list", hint: "first tag should be one of: post, article, link, or video"}
      - {label: "Link", name: "link", widget: "string", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Draft", name: "draft", widget: "boolean", default:true}
`

export async function get() {
  return {
    body,
  }
}
