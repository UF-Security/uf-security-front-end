import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Container } from 'react-bootstrap'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>UFSecurity</title>
        <meta name="description" content="Desenvolvido por alunos de Planejamento e Gerenciamento de Projetos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}