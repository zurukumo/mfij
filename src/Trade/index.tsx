import Template from 'components/Template'

import { DATAS } from './datas'
import Detail from './Detail'
import styles from './index.module.scss'

const Trade = () => (
  <Template title="トレードの歴史">
    <div className={styles.table}>
      <div className={styles.tr}>
        <div className={styles.date_td}>日付</div>
        <div className={styles.detail_td}>獲得</div>
        <div className={styles.detail_td}>放出</div>
      </div>

      {DATAS.map((data, key) => (
        <div className={styles.tr} key={key}>
          <div className={styles.date_td}>{data.date}</div>
          <div className={`${styles.detail_td} ${data.type}`}>
            <Detail datas={data.acquires} />
          </div>
          <div className={`${styles.detail_td} ${data.type}`}>
            <Detail datas={data.releases} />
          </div>
        </div>
      ))}
    </div>
  </Template>
);

export default Trade;
