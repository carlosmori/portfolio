import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

function Document() {
  return (
    <Html key="head">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Splash&display=optional"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@200;300&family=Oswald:wght@700&family=Tinos&display=swap"
          rel="stylesheet"
        ></link>
      </Head>{' '}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
