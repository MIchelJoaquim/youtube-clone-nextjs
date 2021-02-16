import { Button } from '@material-ui/core'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button color="secondary" variant="outlined">Ola</Button>
    </div>
  )
}
