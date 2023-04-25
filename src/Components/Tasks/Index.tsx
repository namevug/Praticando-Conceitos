import { Card } from '../Card/Index'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>5</span>
          </div>

          <div>
            <p className={styles.completed}>Concluídas</p>
            <span>2 de 5</span>
          </div>
        </header>
        <div className={styles.cards}>
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}
