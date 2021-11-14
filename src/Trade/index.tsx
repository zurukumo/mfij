import Template from 'components/Template'
import { HTMLAttributes } from 'react'

import { DATAS } from './datas'
import Detail from './Detail'

const DateTd = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`hidden md:flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/6 ${props.className}`}
  >
    {props.children}
  </div>
);

const DetailTd = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col justify-around text-center py-3 border-2 border-solid divide-gray-100 w-1/2 md:w-2/5 ${props.className}`}
  >
    {props.children}
  </div>
);

const Trade = () => (
  <Template title="トレードの歴史">
    <div className="flex flex-col items-center w-4/5 font-bold">
      <div className="flex w-full justify-center">
        <DateTd>日付</DateTd>
        <DetailTd>獲得</DetailTd>
        <DetailTd>放出</DetailTd>
      </div>

      {DATAS.map((data, key) => (
        <div className="flex w-full justify-center" key={key}>
          <DateTd
            className={data.type === "personal" ? "bg-black text-white" : ""}
          >
            {data.date}
          </DateTd>
          <DetailTd
            className={data.type === "personal" ? "bg-black text-white" : ""}
          >
            <Detail datas={data.acquires} />
          </DetailTd>
          <DetailTd
            className={data.type === "personal" ? "bg-black text-white" : ""}
          >
            <Detail datas={data.releases} />
          </DetailTd>
        </div>
      ))}
    </div>
  </Template>
);

export default Trade;
