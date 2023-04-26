import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Tasks } from './Components/Tasks/Index'
import './styles/global.css'

export interface Card {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTask] = useState<Card[]>([])

  return (
    <>
      <div>
        <Header />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}
