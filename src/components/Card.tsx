import { ReactNode } from 'react'

export const Card = (props: { title: string; children: ReactNode }) => (
  <div className="flex h-[200px] w-[450px] flex-col justify-start space-y-4 rounded-lg border-2 border-gray-600 bg-white p-6 hover:opacity-80">
    <h2 className="text-xl font-semibold">{props.title}</h2>
    <p className="text-gray-700">{props.children}</p>
  </div>
)
