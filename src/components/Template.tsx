import Navbar from 'components/Navbar'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

const Template = (props: { title: string; children: ReactNode }) => (
  <div className="flex flex-col w-full">
    <Helmet>
      <title>{props.title} - Magic Juice</title>
    </Helmet>
    <Navbar />
    <div className="flex flex-col items-center w-full py-10">
      {props.children}
    </div>
  </div>
);

export default Template;
