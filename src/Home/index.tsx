import Card from 'components/Card'
import Template from 'components/Template'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const Home = () => (
  <Template title="ホーム">
    <div className={styles.wrapper}>
      <Link to="./trade">
        <Card title="トレードの歴史">
          マジックのトレードの歴史をまとめてみました。
          あの時、相手に渡した指名権は最終的に誰になったんだろう？というような情報が楽しめます。
          それを知って落ち込むも良し、喜ぶも良しです。...多分落ち込むことのほうが多いです。
        </Card>
      </Link>
      <Link to="./list">
        <Card title="選手名鑑">
          顔写真付きで選手のリストを表示できます。
          まだ開発中なのでこれからどんどん機能を追加していこうと思います。
          自分の好きなチームを紹介するスクショ用途などで是非ご利用ください。
        </Card>
      </Link>
    </div>
  </Template>
);

export default Home;
