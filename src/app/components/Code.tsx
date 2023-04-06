import styles from './Code.module.css'

export function Code({ children, language }) {
  return (
    <div className={styles.codeBlock}>
      <pre>
        <code className={'language-' + language}>{children}</code>
      </pre>
    </div>
  )
}
