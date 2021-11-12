import Navbar from 'components/Navbar'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

const Template = (props: { title: string; children: ReactNode }) => (
  <div className="flex flex-col w-full">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title} - Magic Juice</title>
    </Helmet>
    <Navbar />
    <div className="flex flex-col items-center w-full py-5">
      {props.children}
    </div>
  </div>
);

export default Template;
