/**
 * @overview Next.js root app component.
 *
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import "../src/theme/code/github.css"

import React from "react"
import App from "next/app"
import Head from "next/head"
import Typography from "typography"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import theme from "../src/theme"

const typography = new Typography({
  ...theme.typography,
  includeNormalize: false,
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const getLayout = Component.getLayout || ((_) => _)

    return (
      <ThemeProvider theme={theme}>
        {this._renderGlobalStyles()}

        <Head>
          {this._renderMeta()}
          {this._renderFavicon()}
          {this._renderTypography()}

          <title>Markus Ylisiurunen | Software Engineer</title>
        </Head>

        {getLayout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    )
  }

  _renderMeta() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />

        <meta
          name="description"
          content="I’m a detail-oriented software engineer with a passion for building high-quality solutions for real-world problems. Quality, impact and user experience are the aspects I consider to be the most important."
        />
      </>
    )
  }

  _renderFavicon() {
    return <>{/* TODO: add favicon */}</>
  }

  _renderTypography() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />

        {/* include any specified Google Fonts */}
        {Array.isArray(typography.options.googleFonts) &&
          typography.options.googleFonts.length > 0 && (
            <link
              rel="preload"
              as="style"
              href={[
                `https://fonts.googleapis.com/css?family=`,
                typography.options.googleFonts
                  .map(
                    ({ name, styles }) =>
                      `${name.split(" ").join("+")}:${styles.join(",")}`
                  )
                  .join("|"),
                `&display=swap`,
              ].join("")}
              onLoad="this.onload=null;this.rel='stylesheet'"
            />
          )}
      </>
    )
  }

  _renderGlobalStyles() {
    return (
      <Global
        styles={css`
          body {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
        `}
      />
    )
  }
}

export default MyApp
