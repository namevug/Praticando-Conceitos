import { TbTrash } from 'react-icons/tb'
import styles from './Card.module.css'

export function Card() {
  return (
    <div className={styles.card}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
