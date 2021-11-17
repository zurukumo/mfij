import Template from 'components/Template'
import { useState } from 'react'

import { DATAS, TEAMS } from './datas'
import styles from './index.module.scss'

const List = () => {
  const [team, setTeam] = useState("ORL");
  const players = DATAS.filter((data) => data.team === team);
  players.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <Template title="選手名鑑">
      <div className={styles.players}>
        {players.map((data) => (
          <div className={styles.player} key={data.name}>
            <img src={data.url} alt={data.name} />
            <div className={styles.player_description}>{data.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.teams}>
        {TEAMS.map((team) => (
          <div
            className={styles.team}
            onClick={() => {
              setTeam(team);
            }}
            key={team}
          >
            {team}
          </div>
        ))}
      </div>
    </Template>
  );
};

export default List;
