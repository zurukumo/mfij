import { MetaFunction } from '@remix-run/node'
import { Link, useSearchParams } from 'react-router-dom'

import { Template } from '~/components/Template'

const TITLE = 'TOP'

export const meta: MetaFunction = () => {
  return [{ title: `${TITLE} | Magic Fan in Japan` }]
}

export default function MainPage() {
  const [searchParams] = useSearchParams()
  const tagFilter = searchParams.get('tag') || ''

  const articles = [
    {
      title: 'トレードの歴史',
      href: './trade',
      tags: ['ORL', 'ツール'],
      description:
        'マジックのトレードの歴史をまとめてみました。あの時、相手に渡した指名権は最終的に誰になったんだろう？というような情報が楽しめます。',
    },
    {
      title: '3PTとFTの上手さの関係',
      href: 'https://zenn.dev/zurukumo/articles/9c439ef31d5791',
      tags: ['分析', 'Python', 'Zenn'],
      description:
        '3PTの上手さとFTの上手さの関係性について考察してみました。3PTが上手い選手はFTも上手いという通説は正しいのでしょうか？',
    },
    {
      title: 'Pythonで始めるNBAデータ分析',
      href: 'https://youtu.be/8oEuobkXVKc?si=9Bqx0MP_KwXCSPot',
      tags: ['分析', 'Python', 'YouTube'],
      description:
        'Pythonとpandasを使ってNBAのスタッツを分析する方法をYouTubeで紹介しました。データ分析に興味がある方はぜひご覧ください。',
    },
    {
      title: 'TS%計算ツール',
      href: './ts-calculator',
      tags: ['分析', 'ツール'],
      description: 'TS%を計算できるツールです。バスケはシュート効率です。',
    },
    {
      title: 'プルアップ3PT王は誰だ!?!?',
      href: 'https://youtu.be/pY19rysU3M0?si=PSIPNG4gsvVHYB1k',
      tags: ['分析', 'Python', 'YouTube'],
      description: 'Pythonとpandasを使ってNBAのプルアップ3PT王を分析する方法をYouTubeで紹介しました。',
    },
    {
      title: 'Poeltl完全攻略講座',
      href: 'https://youtu.be/SkwKmyuixDo',
      tags: ['Poeltl', 'Python', 'YouTube'],
      description: 'WordleのNBA版であるPoeltlの勝率を上げるコツをYouTubeで紹介しました。',
    },
    {
      title: '3PT捨てられ王は誰だ!?!?',
      href: 'https://youtu.be/85gniRD_11U',
      tags: ['分析', 'Python', 'YouTube'],
      description: 'Pythonとpandasを使ってNBAで一番3PTを捨てられている選手をYouTubeで分析しました。',
    },
    {
      title: 'POで3PT放置は激化するのか!?!?',
      href: 'https://youtu.be/pzajz0IQ0oc',
      tags: ['分析', 'Python', 'YouTube'],
      description:
        'Pythonとpandasを使ってNBAのプレイオフではレギュラーシーズンよりも3PTを放置する傾向があるのかをYouTubeで分析しました。',
    },
    {
      title: '絶対に怒られないNBAの順位予想をしようぜ!!!',
      href: 'https://youtu.be/85gniRD_11U',
      tags: ['分析', 'SQL', 'YouTube'],
      description: 'NBAMashの投票結果からSQLを利用してNBAの順位を予想しました。',
    },
  ]

  const onClickTag = (event: React.MouseEvent<HTMLDivElement>, tag: string) => {
    event.preventDefault()
    window.location.href = `/?tag=${tag}`
  }

  return (
    <Template title={`記事一覧${tagFilter ? `(#${tagFilter})` : ''}`}>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {articles.map((article) => {
          if (tagFilter !== '' && !article.tags.includes(tagFilter)) return null
          return (
            <Link key={article.title} to={article.href} target={article.href.match(/^http/) ? '_blank' : undefined}>
              <div className="flex h-[230px] w-[350px] flex-col justify-start space-y-4 rounded-lg border-2 border-gray-600 bg-white p-6 lg:h-[210px] lg:w-[480px]">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-700">{article.description}</p>
                <div className="flex gap-x-2">
                  {article.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:opacity-80"
                      onClick={(e) => onClickTag(e, tag)}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}

        {/* ダミーのdiv */}
        <div className="w-[350px] lg:w-[480px]"></div>
        <div className="w-[350px] lg:w-[480px]"></div>
        <div className="w-[350px] lg:w-[480px]"></div>
      </div>
    </Template>
  )
}
