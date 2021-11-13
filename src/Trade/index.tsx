import Template from 'components/Template'

import { DATAS } from './datas'
import Detail from './Detail'

const Trade = () => (
  <Template title="トレード歴史">
    <div className="flex flex-col items-center w-5/6 font-bold">
      <div className="flex w-full justify-center">
        <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/6 date">
          日付
        </div>
        <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-2/5 acquire">
          獲得
        </div>
        <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-2/5 acquire">
          放出
        </div>
      </div>

      {DATAS.map((data, key) => (
        <div className="flex w-full justify-center" key={key}>
          <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/6 date">
            {data.date}
          </div>
          <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-2/5 acquire">
            <Detail datas={data.acquires} />
          </div>
          <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-2/5 acquire">
            <Detail datas={data.releases} />
          </div>
        </div>
      ))}
    </div>
  </Template>
);

export default Trade;
