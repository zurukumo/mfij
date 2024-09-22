import { Link } from 'react-router-dom'

import { Card } from '~/components/Card'
import { Template } from '~/components/Template'

export const MainPage = () => (
  <Template title="記事一覧">
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
      <Link to="./trade">
        <Card title="トレードの歴史">
          マジックのトレードの歴史をまとめてみました。あの時、相手に渡した指名権は最終的に誰になったんだろう？というような情報が楽しめます。
        </Card>
      </Link>
      <a href="https://zenn.dev/zurukumo/articles/9c439ef31d5791">
        <Card title="3PTとFTの上手さの関係">
          3PTの上手さとFTの上手さの関係性について考察してみました。3PTが上手い選手はFTも上手いという通説は正しいのでしょうか？
        </Card>
      </a>
      <a href="https://youtu.be/8oEuobkXVKc?si=9Bqx0MP_KwXCSPot">
        <Card title="Pythonで始めるNBAデータ分析">
          Pythonとpandasを使ってNBAのスタッツを分析する方法をYouTubeで紹介しました。データ分析に興味がある方はぜひご覧ください。
        </Card>
      </a>
      <div className="w-[350px]"></div>
    </div>
  </Template>
)
