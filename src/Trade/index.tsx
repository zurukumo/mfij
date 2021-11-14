import './index.scss'

import Template from 'components/Template'

import { DATAS } from './datas'
import Detail from './Detail'

const Trade = () => (
  <Template title="トレードの歴史">
    <div className="table">
      <div className="tr">
        <div className="date-td">日付</div>
        <div className="detail-td">獲得</div>
        <div className="detail-td">放出</div>
      </div>

      {DATAS.map((data, key) => (
        <div className="tr" key={key}>
          <div className="date-td">{data.date}</div>
          <div className={`detail-td ${data.type}`}>
            <Detail datas={data.acquires} />
          </div>
          <div className={`detail-td ${data.type}`}>
            <Detail datas={data.releases} />
          </div>
        </div>
      ))}
    </div>
  </Template>
);

export default Trade;
