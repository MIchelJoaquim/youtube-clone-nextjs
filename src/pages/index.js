import { Button } from '@material-ui/core'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from './../components/Layout/index';

export default function Home() {
  return (
    <Layout title="YouTube">
      <Button color="secondary" variant="outlined">Ola</Button>
    </Layout>
  )
}
