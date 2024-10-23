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
      <a href="https://zenn.dev/zurukumo/articles/9c439ef31d5791" target="_blank">
        <Card title="3PTとFTの上手さの関係">
          3PTの上手さとFTの上手さの関係性について考察してみました。3PTが上手い選手はFTも上手いという通説は正しいのでしょうか？
        </Card>
      </a>
      <a href="https://youtu.be/8oEuobkXVKc?si=9Bqx0MP_KwXCSPot" target="_blank">
        <Card title="Pythonで始めるNBAデータ分析">
          Pythonとpandasを使ってNBAのスタッツを分析する方法をYouTubeで紹介しました。データ分析に興味がある方はぜひご覧ください。
        </Card>
      </a>
      <Link to="./ts-calculator">
        <Card title="TS%計算ツール">TS%を計算できるツールです。バスケはシュート効率です。</Card>
      </Link>
      <a href="https://youtu.be/pY19rysU3M0?si=PSIPNG4gsvVHYB1k" target="_blank">
        <Card title="プルアップ3PT王は誰だ!?!?">
          Pythonとpandasを使ってNBAのプルアップ3PT王を分析する方法をYouTubeで紹介しました。
        </Card>
      </a>
      <a href="https://youtu.be/SkwKmyuixDo" target="_blank">
        <Card title="Poeltl完全攻略講座">WordleのNBA版であるPoeltlの勝率を上げるコツをYouTubeで紹介しました。</Card>
      </a>
      <a href="https://youtu.be/OT_xVbcSXxE" target="_blank">
        <Card title="3PT捨てられ王は誰だ!?!?">
          Pythonとpandasを使ってNBAで一番3PTを捨てられている選手をYouTubeで分析しました。
        </Card>
      </a>
      <a href="https://youtu.be/pzajz0IQ0oc" target="_blank">
        <Card title="POで3PT放置は激化するのか!?!?">
          Pythonとpandasを使ってNBAのプレイオフではレギュラーシーズンよりも3PTを放置する傾向があるのかをYouTubeで分析しました。
        </Card>
      </a>
      <a href="https://youtu.be/85gniRD_11U" target="_blank">
        <Card title="絶対に怒られないNBAの順位予想をしようぜ!!!">
          NBAMashの投票結果からSQLを利用してNBAの順位を予想しました。
        </Card>
      </a>
      <div className="w-[350px]"></div>
    </div>
  </Template>
)
