import { TbTrash } from 'react-icons/tb'
import styles from './Card.module.css'
import { Task } from '../../App'

interface Props {
  task: Task
}

export function Card({ task }: Props) {
  return (
    <div className={styles.card}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
