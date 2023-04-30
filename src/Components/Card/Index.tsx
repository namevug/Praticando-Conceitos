import { TbTrash } from 'react-icons/tb'
import styles from './Card.module.css'
import { Task } from '../../App'

interface Props {
  task: Task
  onDelete: (taskId: string) => void
}

export function Card({ task, onDelete }: Props) {
  return (
    <div className={styles.card}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
