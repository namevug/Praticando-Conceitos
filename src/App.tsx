import { useState } from 'react'
import { Tasks } from './Components/Tasks/Index'
import './styles/global.css'
import { Header } from './Components/Header/Index'

export interface Task {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true,
    },
    {
      id: 'teste2',
      title: 'teste2',
      isCompleted: false,
    },
  ])

  function addTask(taskTitle: string) {
    setTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((tasks) => tasks.id !== taskId)

    setTask(newTasks)
  }

  function toggleTaskComppletedById(taskId: string) {
    const newTask = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return {
          ...tasks,
          isCompleted: !tasks.isCompleted,
        }
      }
      return tasks
    })

    setTask(newTask)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskComppletedById}
      />
    </>
  )
}
