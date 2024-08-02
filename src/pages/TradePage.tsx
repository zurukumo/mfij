import { PropsWithChildren } from 'react'

import { Template } from '~/components/Template'

const Table: React.FC<PropsWithChildren> = (props) => (
  <div className="flex w-[360px] flex-col items-center border border-gray-600 text-sm font-bold lg:w-[1000px] lg:text-base">
    {props.children}
  </div>
)

const Tr: React.FC<PropsWithChildren> = (props) => <div className="flex w-full justify-center">{props.children}</div>

const DateTd: React.FC<PropsWithChildren> = (props) => (
  <div className="hidden w-[200px] flex-col justify-around border border-gray-600 p-2 text-center lg:flex">
    {props.children}
  </div>
)

const DetailTd: React.FC<PropsWithChildren> = (props) => (
  <div className="flex w-[180px] flex-col justify-around border border-gray-600 p-2 text-center lg:w-[400px]">
    {props.children}
  </div>
)

const Row: React.FC<PropsWithChildren> = (props) => <div className="my-4">{props.children}</div>

const Player: React.FC<PropsWithChildren<{ id: string }>> = (props) => {
  const playerId = props.id
  const shortId = props.id.charAt(0)
  return (
    <div className="underline hover:opacity-80">
      <a href={`https://www.basketball-reference.com/players/${shortId}/${playerId}.html`} target="blank">
        {props.children}
      </a>
    </div>
  )
}

const Pick: React.FC<PropsWithChildren> = (props) => <div className="text-green-700">{props.children}</div>
const Cash: React.FC<PropsWithChildren> = (props) => <div className="text-blue-700">{props.children}</div>
const Protected = () => <div className="text-red-700">=&gt; protected</div>
const Forfeited = () => <div className="text-red-700">=&gt; forfeited</div>
const Manager: React.FC<PropsWithChildren> = (props) => <div className="text-purple-700">{props.children}</div>

export const TradePage = () => (
  <Template title="トレードの歴史">
    <Table>
      <Tr>
        <DateTd>日付</DateTd>
        <DetailTd>獲得</DetailTd>
        <DetailTd>放出</DetailTd>
      </Tr>
      <Tr>
        <DateTd>2024/06/27</DateTd>
        <DetailTd>
          <Row>
            <Pick>higher 2030 2RP</Pick>
          </Row>
          <Row>
            <Pick>higher 2031 2RP</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2024 2RP</Pick>
            <Player id="reevean01">=&gt; Antonio Reeves</Player>
          </Row>
          <Row>
            <Pick>lower 2030 2RP</Pick>
          </Row>
          <Row>
            <Pick>lower 2031 2RP</Pick>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2023/07/17</DateTd>
        <DetailTd>
          <Row>
            <Pick>higher 2026 1RP</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>lower 2026 1RP</Pick>
          </Row>
          <Row>
            <Pick>2024 2RP</Pick>
            <Forfeited />
          </Row>
          <Row>
            <Pick>2026 2RP</Pick>
          </Row>
          <Row>
            <Pick>2028 2RP</Pick>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2023/06/23</DateTd>
        <DetailTd>
          <Row>
            <Pick>2030 2RP</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2023 2RP</Pick>
            <Player id="jacksan01">=&gt; Andre Jackson Jr.</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2023/02/09</DateTd>
        <DetailTd>
          <Row>
            <Player id="beverpa01">Patrick Beverley</Player>
          </Row>
          <Row>
            <Pick>2024 2RP</Pick>
            <Forfeited />
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="bambamo01">Mo Bamba</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2022/06/23</DateTd>
        <DetailTd>
          <Row>
            <Pick>2028 2RP</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2022 2RP</Pick>
            <Player id="chrisma02">=&gt; Max Christie</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2022/02/10</DateTd>
        <DetailTd>
          <Row>
            <Player id="doziepj01">P.J. Dozier</Player>
          </Row>
          <Row>
            <Player id="bolbo01">Bol Bol</Player>
          </Row>
          <Row>
            <Pick>2028 2RP</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2023 2RP</Pick>
            <Protected />
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/07/29</DateTd>
        <DetailTd>
          <Row>
            <Pick>2026 2RP</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="prestja01">Jason Preston</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player id="harriga01">Gary Harris</Player>
          </Row>
          <Row>
            <Player id="hamptrj01">R.J. Hampton</Player>
          </Row>
          <Row>
            <Pick>2025 1RP</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="gordoaa01">Aaron Gordon</Player>
          </Row>
          <Row>
            <Player id="clarkga01">Gary Clark</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player id="teaguje01">Jeff Teague</Player>
          </Row>
          <Row>
            <Pick>2025 2RP</Pick>
          </Row>
          <Row>
            <Pick>2027 2RP</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="fournev01">Evan Fournier</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player id="cartewe01">Wendell Carter Jr.</Player>
          </Row>
          <Row>
            <Player id="porteot01">Otto Porter Jr.</Player>
          </Row>
          <Row>
            <Pick>2021 1RP</Pick>
            <Player id="wagnefr01">=&gt; Franz Wagner</Player>
          </Row>
          <Row>
            <Pick>2023 1RP</Pick>
            <Player id="howarje01">=&gt; Jett Howard</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="vucevni01">Nikola Vucevic</Player>
          </Row>
          <Row>
            <Player id="aminual01">Al-Farouq Aminu</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2020/11/18</DateTd>
        <DetailTd>
          <Row>
            <Pick>2022 2RP</Pick>
            <Player id="chrisma02">=&gt; Max Christie</Player>
          </Row>
          <Row>
            <Pick>2026 2RP</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="nworajo01">=&gt; Jordan Nwora</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2020/02/06</DateTd>
        <DetailTd>
          <Row>
            <Player id="ennisja01">James Ennis</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="reedpa01">=&gt; Paul Reed</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2019/06/20</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="reedpa01">=&gt; Paul Reed</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Player id="hortota01">=&gt; Talen Horton-Tucker</Player>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2019/02/07</DateTd>
        <DetailTd>
          <Row>
            <Player id="fultzma01">Markelle Fultz</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="simmojo02">Jonathon Simmons</Player>
          </Row>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="edwarca01">=&gt; Carsen Edwards</Player>
          </Row>
          <Row>
            <Pick>2020 1RP</Pick>
            <Player id="maxeyty01">=&gt; Tyrese Maxey</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/23</DateTd>
        <DetailTd>
          <Row>
            <Player id="martija01">Jarell Martin</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="johnsda04">Dakari Johnson</Player>
          </Row>
          <Row>
            <Player id="harvety01">Tyler Harvey</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/20</DateTd>
        <DetailTd>
          <Row>
            <Player id="johnsda04">Dakari Johnson</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="purviro01">Rodney Purvis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/07</DateTd>
        <DetailTd>
          <Row>
            <Player id="mozgoti01">Timofey Mozgov</Player>
          </Row>
          <Row>
            <Player id="grantje02">Jerian Grant</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="biyombi01">Bismack Biyombo</Player>
          </Row>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="martico01">=&gt; Cody Martin</Player>
          </Row>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="madarya01">=&gt; Yam Madar</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/06/21</DateTd>
        <DetailTd>
          <Row>
            <Player id="jacksju02">Justin Jackson</Player>
          </Row>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="martico01">=&gt; Cody Martin</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="vandeja01">Jarred Vanderbilt</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/02/08</DateTd>
        <DetailTd>
          <Row>
            <Pick>2018 2RP</Pick>
            <Player id="vandeja01">=&gt; Jarred Vanderbilt</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="paytoel01">Elfrid Payton</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/06/22</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 1RP</Pick>
            <Player id="maxeyty01">=&gt; Tyrese Maxey</Player>
          </Row>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="madarya01">=&gt; Yam Madar</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="pasecan01">Anzejs Pasecniks</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/06/22</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="hortota01">=&gt; Talen Horton-Tucker</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="rabbiv01">Ivan Rabb</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/05/23</DateTd>
        <DetailTd>
          <Row>
            <Manager>Jeff Weltman</Manager>
          </Row>
          <Row>
            <Manager>John Hammond</Manager>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Manager>Rob Hennigan</Manager>
          </Row>
          <Row>
            <Pick>2018 2RP</Pick>
            <Player id="kurucro01">=&gt; Rodions Kurucs</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/02/14</DateTd>
        <DetailTd>
          <Row>
            <Player id="rosste01">Terrence Ross</Player>
          </Row>
          <Row>
            <Pick>2017 1RP</Pick>
            <Player id="pasecan01">=&gt; Anzejs Pasecniks</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="ibakase01">Serge Ibaka</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/07/15</DateTd>
        <DetailTd>
          <Row>
            <Player id="wilcocj01">C.J. Wilcox</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="marblde01">Devyn Marble</Player>
          </Row>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="careyve01">=&gt; Vernon Carey Jr.</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/07/07</DateTd>
        <DetailTd>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="napiesh01">Shabazz Napier</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/29</DateTd>
        <DetailTd>
          <Row>
            <Player id="meeksjo01">Jodie Meeks</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="handsja01">=&gt; Jaylen Hands</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/23</DateTd>
        <DetailTd>
          <Row>
            <Player id="ibakase01">Serge Ibaka</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="oladivi01">Victor Oladipo</Player>
          </Row>
          <Row>
            <Player id="ilyaser01">Ersan Ilyasova</Player>
          </Row>
          <Row>
            <Player id="sabondo01">Domantas Sabonis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/23</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="handsja01">=&gt; Jaylen Hands</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="laymaja01">Jake Layman</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/02/18</DateTd>
        <DetailTd>
          <Row>
            <Player id="cunnija01">Jared Cunningham</Player>
          </Row>
          <Row>
            <Pick>2020 2RP</Pick>
            <Player id="careyve01">=&gt; Vernon Carey Jr.</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="fryech01">Channing Frye</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/02/16</DateTd>
        <DetailTd>
          <Row>
            <Player id="ilyaser01">Ersan Ilyasova</Player>
          </Row>
          <Row>
            <Player id="jennibr01">Brandon Jennings</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="harrito02">Tobias Harris</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/01/12</DateTd>
        <DetailTd>
          <Row>
            <Player id="harrijo01">Joe Harris</Player>
          </Row>
          <Row>
            <Pick>2017 2RP</Pick>
            <Protected />
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2RP</Pick>
            <Protected />
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/27</DateTd>
        <DetailTd>
          <Row>
            <Player id="napiesh01">Shabazz Napier</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2016 2RP</Pick>
            <Protected />
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/12</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 2RP</Pick>
            <Protected />
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="harklma01">Maurice Harkless</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/09</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="edwarca01">=&gt; Carsen Edwards</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="oquinky01">Kyle O'Quinn</Player>
          </Row>
          <Row>
            <Pick>2019 2RP</Pick>
            <Player id="brazdig01">=&gt; Ignas Brazdeikis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/06/24</DateTd>
        <DetailTd>
          <Row>
            <Player id="timmaja01">Janis Timma</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="ridnolu01">Luke Ridnour</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/07/14</DateTd>
        <DetailTd>
          <Row>
            <Player id="randoan01">Anthony Randolph</Player>
          </Row>
          <Row>
            <Pick>2015 2RP</Pick>
            <Player id="harvety01">=&gt; Tyler Harvey</Player>
          </Row>
          <Row>
            <Pick>2016 2RP</Pick>
            <Player id="laymaja01">=&gt; Jake Layman</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="rakovmi01">Milovan Rakovic</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/06/26</DateTd>
        <DetailTd>
          <Row>
            <Player id="paytoel01">Elfrid Payton</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="saricda01">Dario Saric</Player>
          </Row>
          <Row>
            <Pick>2015 2RP</Pick>
            <Player id="hernawi01">=&gt; Willy Hernangomez</Player>
          </Row>
          <Row>
            <Pick>2017 1RP</Pick>
            <Player id="foxde01">=&gt; De'Aaron Fox</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/06/26</DateTd>
        <DetailTd>
          <Row>
            <Player id="fournev01">Evan Fournier</Player>
          </Row>
          <Row>
            <Player id="marblde01">Devyn Marble</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="afflaar01">Arron Afflalo</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2013/02/21</DateTd>
        <DetailTd>
          <Row>
            <Player id="lambdo01">Doron Lamb</Player>
          </Row>
          <Row>
            <Player id="harrito02">Tobias Harris</Player>
          </Row>
          <Row>
            <Player id="udrihbe01">Beno Udrih</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="redicjj01">J.J. Redick</Player>
          </Row>
          <Row>
            <Player id="ayongu01">Gustavo Ayon</Player>
          </Row>
          <Row>
            <Player id="smithis01">Ish Smith</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2013/02/21</DateTd>
        <DetailTd>
          <Row>
            <Player id="warriha01">Hakim Warrick</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="mcrobjo01">Josh McRoberts</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2012/08/10</DateTd>
        <DetailTd>
          <Row>
            <Player id="mcrobjo01">Josh McRoberts</Player>
          </Row>
          <Row>
            <Player id="eyengch01">Christian Eyenga</Player>
          </Row>
          <Row>
            <Player id="harklma01">Maurice Harkless</Player>
          </Row>
          <Row>
            <Player id="vucevni01">Nikola Vucevic</Player>
          </Row>
          <Row>
            <Player id="afflaar01">Arron Afflalo</Player>
          </Row>
          <Row>
            <Player id="harrial01">Al Harrington</Player>
          </Row>
          <Row>
            <Pick>2013 2RP</Pick>
            <Player id="osbyro01">=&gt; Romero Osby</Player>
          </Row>
          <Row>
            <Pick>2014 1RP</Pick>
            <Player id="saricda01">=&gt; Dario Saric</Player>
          </Row>
          <Row>
            <Pick>2015 2RP</Pick>
            <Protected />
          </Row>
          <Row>
            <Pick>2017 1RP</Pick>
            <Player id="foxde01">=&gt; De'Aaron Fox</Player>
          </Row>
          <Row>
            <Pick>2017 2RP</Pick>
            <Player id="iwundwe01">=&gt; Wesley Iwundu</Player>
          </Row>
          <Row>
            <Pick>2018 2RP</Pick>
            <Player id="kurucro01">=&gt; Rodions Kurucs</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="howardw01">Dwight Howard</Player>
          </Row>
          <Row>
            <Player id="duhonch01">Chris Duhon</Player>
          </Row>
          <Row>
            <Player id="clarkea01">Earl Clark</Player>
          </Row>
          <Row>
            <Player id="richaja01">Jason Richardson</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2012/07/11</DateTd>
        <DetailTd>
          <Row>
            <Player id="ayongu01">Gustavo Ayon</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="anderry01">Ryan Anderson</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2012/06/20</DateTd>
        <DetailTd>
          <Row>
            <Manager>Rob Hennigan</Manager>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Manager>Otis Smith</Manager>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2011/12/12</DateTd>
        <DetailTd>
          <Row>
            <Player id="davisgl01">Glen Davis</Player>
          </Row>
          <Row>
            <Player id="wafervo01">Von Wafer</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="bassbr01">Brandon Bass</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2011/06/23</DateTd>
        <DetailTd>
          <Row>
            <Player id="harpeju01">Justin Harper</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2013 2RP</Pick>
            <Player id="crabbal01">=&gt; Allen Crabbe</Player>
          </Row>
          <Row>
            <Pick>2014 2RP</Pick>
            <Player id="harrijo01">=&gt; Joe Harris</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2010/12/18</DateTd>
        <DetailTd>
          <Row>
            <Player id="arenagi01">Gilbert Arenas</Player>
          </Row>
          <Row>
            <Player id="richaja01">Jason Richardson</Player>
          </Row>
          <Row>
            <Player id="turkohe01">Hedo Turkoglu</Player>
          </Row>
          <Row>
            <Player id="clarkea01">Earl Clark</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player id="lewisra02">Rashard Lewis</Player>
          </Row>
          <Row>
            <Player id="cartevi01">Vince Carter</Player>
          </Row>
          <Row>
            <Player id="pietrmi01">Mickael Pietrus</Player>
          </Row>
          <Row>
            <Player id="gortama01">Marcin Gortat</Player>
          </Row>
          <Row>
            <Pick>2011 1RP</Pick>
            <Player id="mirotni01">=&gt; Nikola Mirotic</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
      </Tr>
    </Table>
  </Template>
)
