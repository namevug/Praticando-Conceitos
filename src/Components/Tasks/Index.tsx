import { Task } from '../../App'
import { Card } from '../Card/Index'
import ClipBoard from '../../assets/ClipBoard.svg'
import styles from './Tasks.module.css'

interface Props {
  tasks: Task[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
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
            return (
              <Card
                key={task.id}
                task={task}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            )
          })}

          {tasks.length <= 0 && (
            <section className={styles.empty}>
              <img src={ClipBoard} alt={ClipBoard} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  )
}
