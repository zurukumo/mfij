import { ReactNode } from 'react'

const Card = (props: { title: string; children: ReactNode }) => (
  <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div>
      <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
      <p className="mt-2 text-gray-600">{props.children}</p>
    </div>
  </div>
);

export default Card;
