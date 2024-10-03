import { useState } from 'react'

import { Template } from '~/components/Template'

export const TsCalculatorPage = () => {
  const [pts, setPts] = useState<number | null>(null)
  const [fga, setFga] = useState<number | null>(null)
  const [fta, setFta] = useState<number | null>(null)

  const onChangePts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPts(convertToInt(e.target.value))
  }
  const onChangeFga = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFga(convertToInt(e.target.value))
  }
  const onChangeFta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFta(convertToInt(e.target.value))
  }

  const convertToInt = (value: string) => {
    return value.match(/^\d+$/) ? parseInt(value, 10) : null
  }

  const tsPercent = pts && fga && fta ? ((pts / (2 * (fga + 0.44 * fta) + 1e-10)) * 100).toFixed(1) : null

  return (
    <Template title="TS%計算ツール">
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex w-[300px] justify-around">
          <label htmlFor="pts" className="h-10 w-[40px] leading-10">
            PTS
          </label>
          <input
            type="text"
            id="pts"
            className="h-10 w-[200px] rounded-md border border-gray-300 pl-2 leading-10"
            onChange={onChangePts}
          />
        </div>
        <div className="flex w-[300px] justify-around">
          <label htmlFor="fga" className="h-10 w-[40px] leading-10">
            FGA
          </label>
          <input
            type="text"
            id="fga"
            className="h-10 w-[200px] rounded-md border border-gray-300 pl-2 leading-10"
            onChange={onChangeFga}
          />
        </div>
        <div className="flex w-[300px] justify-around">
          <label htmlFor="fta" className="h-10 w-[40px] leading-10">
            FTA
          </label>
          <input
            type="text"
            id="fta"
            className="h-10 w-[200px] rounded-md border border-gray-300 pl-2 leading-10"
            onChange={onChangeFta}
          />
        </div>
        <div className="mt-8 text-2xl">{tsPercent ? `${tsPercent} TS%` : '入力してください'}</div>
      </div>
    </Template>
  )
}
