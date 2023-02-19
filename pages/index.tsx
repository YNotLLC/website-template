import { Layout } from '@/components/Layout'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>JamStack Website</title>
        <meta name="description" content="This is JamStack Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold underline text-gray-200">
          Hello JamStack Website!
        </h1>
      </Layout>
    </>
  )
}

export default Home
