import Head from 'next/head'
import Container from '../components/Container'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Container />
      <DarkModeToggle />
    </>
  )
}
