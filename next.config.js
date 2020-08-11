const withMdxEnhanced = require("next-mdx-enhanced")

const remarkCapitalize = require("remark-capitalize")
const remarkCodeTitles = require("remark-code-titles")
const rehypePrism = require("mdx-prism")
const rehypeSlug = require("rehype-slug")
const rehypeAutolinkHeadings = require("rehype-autolink-headings")

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [remarkCapitalize, remarkCodeTitles],
  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
})()
