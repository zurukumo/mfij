import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

import { Navbar } from '~/components/Navbar'

export const Template = (props: { title: string; children: ReactNode }) => (
  <div className="flex min-h-screen w-full bg-slate-50">
    <div className="flex w-full flex-col items-center">
      <Helmet>
        <title>{props.title} - Magic Fan in Japan</title>
      </Helmet>
      <Navbar />
      <div className="flex w-[375px] flex-col items-center space-y-10 py-10 lg:w-[1024px]">
        <h1 className="text-3xl">{props.title}</h1>
        {props.children}
      </div>
    </div>
  </div>
)
