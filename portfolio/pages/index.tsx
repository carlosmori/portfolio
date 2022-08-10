import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head key="head">
        <title>Charlie Mori - Portfolio</title>
        <link rel="icon" href="/contactIcons/link.png" />
      </Head>
      <Main />
    </div>
  )
}

export default Home
