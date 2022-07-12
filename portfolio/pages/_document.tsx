import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

function Document() {
  return (
    <Html key="head">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=optional"
          rel="stylesheet"
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
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@200;300&display=swap"
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
