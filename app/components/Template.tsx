import { MetaFunction } from '@remix-run/node'
import { ReactNode } from 'react'

import { Header } from '~/components/Header'

import { Footer } from './Footer'

export const meta: MetaFunction = () => [
  { title: 'Magic Fan in Japan' },
  { name: 'description', content: '日本のマジックファンのためのサイトです。' },
]

export const Template = (props: { title: string; children: ReactNode }) => (
  <div className="flex min-h-dvh w-full bg-slate-50">
    <div className="flex w-full flex-col items-center">
      <Header />
      <main className="mt-16 flex w-[375px] flex-1 flex-col items-center gap-y-8 py-8 lg:w-[1024px]">
        <h1 className="text-2xl lg:text-3xl">{props.title}</h1>
        {props.children}
      </main>
      <Footer />
    </div>
  </div>
)
