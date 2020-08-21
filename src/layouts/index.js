import React from "react"
import Head from "next/head"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Box } from "rebass"

import { ReferenceProvider } from "../components/Reference"

const BaseLayout = ({ children, frontMatter }) => {
  const theme = useTheme()
  const rhythm = (x) => `${x * theme.lineHeights.base}rem`

  return (
    <>
      <Global
        styles={css`
          h2,
          h3,
          h4 {
            margin-bottom: ${rhythm(1)};
            margin-top: ${rhythm(1.5)};
            padding-bottom: 12px;
          }

          p,
          blockquote,
          pre,
          ul,
          ol {
            margin-bottom: ${rhythm(1)};
          }

          img {
            display: block;
            max-width: 80%;
            margin: ${rhythm(1)} auto;
          }

          pre {
            margin-bottom: ${rhythm(1)} !important;
          }

          li {
            margin-bottom: ${rhythm(0.25)};
            margin-top: 0px;
          }

          .katex-display {
            margin: ${rhythm(1)} 0px;
          }

          .katex .mfrac .frac-line {
            border-bottom-style: solid;
          }

          pre[class*="language-"] {
            margin-top: 0px;
            border-top: none;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-color: ${theme.colors.border.code};
          }

          .remark-code-title {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border: 1px solid ${theme.colors.border.code};
            font-weight: 500;
            padding: 8px 16px;
            background-color: ${theme.colors.bg.filename};
          }
        `}
      />

      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
        />
      </Head>
      <ReferenceProvider>
        <Box as="h1" sx={{ mb: 10 }}>
          {frontMatter.title}
        </Box>
        {children}
      </ReferenceProvider>
    </>
  )
}

export default (frontMatter) => (props) => (
  <BaseLayout frontMatter={frontMatter} {...props} />
)
