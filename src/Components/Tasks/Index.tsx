import { Task } from '../../App'
import { Card } from '../Card/Index'
import styles from './Tasks.module.css'

interface Props {
  tasks: Task[]
  onDelete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksQuantity}</span>
          </div>

          <div>
            <p className={styles.completed}>Concluídas</p>
            <span>
              {completedTasks} de {tasksQuantity}
            </span>
          </div>
        </header>
        <div className={styles.cards}>
          {tasks.map((task) => {
            return <Card key={task.id} task={task} onDelete={onDelete} />
          })}
        </div>
      </section>
    </>
  )
}
