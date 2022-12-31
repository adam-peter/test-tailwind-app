import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind App</title>
        <meta name="description" content="Test Tailwind App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-red-500'>
        Hello!
      </main>
    </>
  )
}
