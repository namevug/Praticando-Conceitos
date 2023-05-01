import { TbTrash } from 'react-icons/tb'
import CheckCircle from '../../assets/Check.svg'
import styles from './Card.module.css'
import { Task } from '../../App'

interface Props {
  task: Task
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Card({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.card}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <img src={CheckCircle} /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
