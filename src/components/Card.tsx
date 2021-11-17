import { ReactNode } from 'react'

import styles from './Card.module.scss'

const Card = (props: { title: string; children: ReactNode }) => (
  <div className={styles.wrapper}>
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.children}</p>
    </div>
  </div>
);

export default Card;
