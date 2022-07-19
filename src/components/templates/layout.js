import Navbar from '../organisms/navbar'
import Footer from '../organisms/footer'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import FilterByLocation from '../molecules/filterByLocation'
import { Button, Nav } from 'react-bootstrap'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>UFSecurity</title>
        <meta name="description" content="Desenvolvido por alunos de Planejamento e Gerenciamento de Projetos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Nav className="d-flex justify-content-end p-1">
        <Nav.Item className="m-1" as="li">
          <FilterByLocation locations={props.locations} />
        </Nav.Item>
        <Nav.Item className="m-1">
          <Button href="/createOccurrence">Cadastrar Ocorrência</Button>
        </Nav.Item>
      </Nav>
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  )
}