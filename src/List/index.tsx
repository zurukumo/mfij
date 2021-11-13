import Template from 'components/Template'
import { useState } from 'react'

import { DATAS, TEAMS } from './datas'

const List = () => {
  const [team, setTeam] = useState("ORL");
  const players = DATAS.filter((data) => data.team === team);
  players.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <Template title="表示機能">
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-3 gap-x-4 gap-y-8 w-3/4">
        {players.map((data) => (
          <div className="flex flex-col items-center" key={data.name}>
            <img src={data.url} alt={data.name} />
            <div className="w-4/5 -mt-4 p-2 bg-white shadow-lg rounded-lg text-center align-middle text-sm font-bold">
              {data.name}
            </div>
          </div>
        ))}
      </div>
      <div className="grid xl:grid-cols-10 md:grid-cols-5 gap-4 w-2/3 mt-16">
        {TEAMS.map((team) => (
          <div
            className="p-5 bg-white shadow-lg rounded-lg text-center align-middle cursor-pointer hover:opacity-75"
            onClick={() => {
              setTeam(team);
            }}
          >
            {team}
          </div>
        ))}
      </div>
    </Template>
  );
};

export default List;
