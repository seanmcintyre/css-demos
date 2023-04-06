import Link from 'next/link'
import styles from './Examples.module.css'

export function Examples({ children }) {
  return (
    <main className={styles.main}>
      <Link href="/">home</Link>
      {children}
    </main>
  )
}
