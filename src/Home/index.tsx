import Card from 'components/Card'
import Template from 'components/Template'
import { Link } from 'react-router-dom'

const Home = () => (
  <Template title="ホーム">
    <Link to="./trade" className="hover:opacity-75">
      <Card title="トレードの歴史">
        <span>マジックの歴史をまとめてみました。</span>
        <span></span>
      </Card>
    </Link>
  </Template>
);

export default Home;
