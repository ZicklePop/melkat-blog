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
      - {label: "ID", name: "id", widget: "string"}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Cover Image", name: "cover", widget: "image"}
      - {label: "Tags", name: "tags", widget: "string"}
      - {label: "Link", name: "link", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Draft", name: "draft", widget: "boolean"} 
`

export async function get() {
  return {
    body,
  }
}
