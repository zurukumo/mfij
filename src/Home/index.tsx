import Card from 'components/Card'
import Template from 'components/Template'
import { Link } from 'react-router-dom'

const Home = () => (
  <Template title="ホーム">
    <Link to="./trade" className="hover:opacity-75">
      <Card title="トレードの歴史">
        <p>マジックのトレードの歴史をまとめてみました。</p>
        <p>
          あの時、相手に渡した指名権は結局誰になったんだろう？というような情報が楽しめます。
        </p>
        <p>それを知って落ち込むも良し、喜ぶも良しです。</p>
        <p>多分落ち込むことのほうが多いです。</p>
      </Card>
    </Link>
  </Template>
);

export default Home;
