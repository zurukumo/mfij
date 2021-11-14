import Template from 'components/Template'

import { DATAS } from './datas'
import Detail from './Detail'

const Trade = () => (
  <Template title="トレードの歴史">
    <div className="flex flex-col items-center w-4/5 font-bold">
      <div className="flex w-full justify-center">
        <div className="hidden md:flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/6">
          日付
        </div>
        <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/2 md:w-2/5">
          獲得
        </div>
        <div className="flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/2 md:w-2/5">
          放出
        </div>
      </div>

      {DATAS.map((data, key) => (
        <div className="flex w-full justify-center" key={key}>
          <div
            className={`hidden md:flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/6 ${
              data.type === "personal" && "bg-black text-white"
            }`}
          >
            {data.date}
          </div>
          <div
            className={`flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/2 md:w-2/5 ${
              data.type === "personal" && "bg-black text-white"
            }`}
          >
            <Detail datas={data.acquires} />
          </div>
          <div
            className={`flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/2 md:w-2/5 ${
              data.type === "personal" && "bg-black text-white"
            }`}
          >
            <Detail datas={data.releases} />
          </div>
        </div>
      ))}
    </div>
  </Template>
);

export default Trade;
