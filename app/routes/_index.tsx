import { MetaFunction } from '@remix-run/node'
import { create } from 'domain'
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
      title: '絶対に怒られないNBAの順位予想をしようぜ!!!',
      href: 'https://youtu.be/85gniRD_11U',
      tags: ['分析', 'SQL', 'YouTube'],
      description: 'NBAMashの投票結果からSQLを利用してNBAの順位を予想しました。',
      createdAt: '2024-10-23',
    },
    {
      title: 'POで3PT放置は激化するのか!?!?',
      href: 'https://youtu.be/pzajz0IQ0oc',
      tags: ['分析', 'Python', 'YouTube'],
      description:
        'Pythonとpandasを使ってNBAのプレイオフではレギュラーシーズンよりも3PTを放置する傾向があるのかをYouTubeで分析しました。',
      createdAt: '2024-10-19',
    },
    {
      title: '3PT捨てられ王は誰だ!?!?',
      href: 'https://youtu.be/85gniRD_11U',
      tags: ['分析', 'Python', 'YouTube'],
      description: 'Pythonとpandasを使ってNBAで一番3PTを捨てられている選手をYouTubeで分析しました。',
      createdAt: '2024-10-14',
    },
    {
      title: 'Poeltl完全攻略講座',
      href: 'https://youtu.be/SkwKmyuixDo',
      tags: ['Poeltl', 'Python', 'YouTube'],
      description: 'WordleのNBA版であるPoeltlの勝率を上げるコツをYouTubeで紹介しました。',
      createdAt: '2024-10-13',
    },
    {
      title: 'プルアップ3PT王は誰だ!?!?',
      href: 'https://youtu.be/pY19rysU3M0?si=PSIPNG4gsvVHYB1k',
      tags: ['分析', 'Python', 'YouTube'],
      description: 'Pythonとpandasを使ってNBAのプルアップ3PT王を分析する方法をYouTubeで紹介しました。',
      createdAt: '2024-10-12',
    },
    {
      title: 'TS%計算ツール',
      href: './ts-calculator',
      tags: ['分析', 'ツール'],
      description: 'TS%を計算できるツールです。バスケはシュート効率です。',
      createdAt: '2024-10-03',
    },
    {
      title: 'Pythonで始めるNBAデータ分析',
      href: 'https://youtu.be/8oEuobkXVKc?si=9Bqx0MP_KwXCSPot',
      tags: ['分析', 'Python', 'YouTube'],
      description:
        'Pythonとpandasを使ってNBAのスタッツを分析する方法をYouTubeで紹介しました。データ分析に興味がある方はぜひご覧ください。',
      createdAt: '2024-09-22',
    },
    {
      title: '3PTとFTの上手さの関係',
      href: 'https://zenn.dev/zurukumo/articles/9c439ef31d5791',
      tags: ['分析', 'Python', 'Zenn'],
      description:
        '3PTの上手さとFTの上手さの関係性について考察してみました。3PTが上手い選手はFTも上手いという通説は正しいのでしょうか？',
      createdAt: '2024-01-24',
    },
    {
      title: 'トレードの歴史',
      href: './trade',
      tags: ['ORL'],
      description:
        'マジックのトレードの歴史をまとめてみました。あの時、相手に渡した指名権は最終的に誰になったんだろう？というような情報が楽しめます。',
      createdAt: '2021-11-13',
      updatedAt: '2024-06-29',
    },
  ]

  const onClickTag = (event: React.MouseEvent<HTMLDivElement>, tag: string) => {
    event.preventDefault()
    window.location.href = `/?tag=${tag}`
  }

  return (
    <Template title={`記事一覧${tagFilter ? `(#${tagFilter})` : ''}`}>
      <div className="flex flex-col justify-center gap-x-6 gap-y-10">
        {articles
          .filter((article) => {
            if (tagFilter === '') return true
            return article.tags.includes(tagFilter)
          })
          .map((article) => {
            return (
              <Link key={article.title} to={article.href} target={article.href.match(/^http/) ? '_blank' : undefined}>
                <div className="flex w-[350px] flex-col justify-start space-y-4 rounded-lg border-2 border-gray-600 bg-white p-6 lg:w-[700px]">
                  <h2 className="flex items-center gap-x-3 text-xl font-semibold">
                    {/* 一ヶ月以内に作成されてたら新着マークを表示する */}
                    {new Date(article.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && (
                      <div className="h-6 min-w-10 rounded-full bg-blue-500 text-center text-xs leading-6 text-white">
                        NEW
                      </div>
                    )}
                    {article.title}
                  </h2>
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
                  <div className="flex justify-end gap-x-4 text-sm text-gray-700">
                    <div>作成:{article.createdAt}</div>
                    {article.updatedAt && <div>更新:{article.updatedAt}</div>}
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </Template>
  )
}
