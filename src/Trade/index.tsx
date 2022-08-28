import Template from "components/Template";
import { ReactNode } from "react";
import styles from "./index.module.scss";

const Table = (props: { children: ReactNode }) => (
  <div className={styles.table}>{props.children}</div>
);

const Tr = (props: { children: ReactNode }) => (
  <div className={styles.tr}>{props.children}</div>
);

const DateTd = (props: { children: ReactNode }) => (
  <div className={styles.date_td}>{props.children}</div>
);

const DetailTd = (props: { children: ReactNode }) => (
  <div className={styles.detail_td}>{props.children}</div>
);

const Row = (props: { children: ReactNode }) => (
  <div className={styles.row}>{props.children}</div>
);

const Player = (props: { children: ReactNode; player_id: string }) => {
  const player_id = props.player_id;
  const short_id = props.player_id.charAt(0);
  return (
    <div className={styles.player}>
      <a
        href={`https://www.basketball-reference.com/players/${short_id}/${player_id}.html`}
        target="blank"
      >
        {props.children}
      </a>
    </div>
  );
};

const Pick = (props: { children: ReactNode }) => (
  <div className={styles.pick}>{props.children}</div>
);

const Cash = (props: { children: ReactNode }) => (
  <div className={styles.cash}>{props.children}</div>
);

const Protected = (props: { children: ReactNode }) => (
  <div className={styles.protected}>{props.children}</div>
);

const Manager = (props: { children: ReactNode }) => (
  <div className={styles.manager}>{props.children}</div>
);

const Trade = () => (
  <Template title="トレードの歴史">
    <Table>
      <Tr>
        <DateTd>日付</DateTd>
        <DetailTd>獲得</DetailTd>
        <DetailTd>放出</DetailTd>
      </Tr>
      <Tr>
        <DateTd>2022/06/23</DateTd>
        <DetailTd>
          <Row>
            <Pick>2028 2nd round pick</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2022 2nd round pick</Pick>
            <Player player_id="chrisma02">=&gt; Max Christie</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2022/02/10</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="doziepj01">P.J. Dozier</Player>
          </Row>
          <Row>
            <Player player_id="bolbo01">Bol Bol</Player>
          </Row>
          <Row>
            <Pick>2028 2nd round pick</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2023 2nd round pick</Pick>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/07/29</DateTd>
        <DetailTd>
          <Row>
            <Pick>2026 2nd round pick</Pick>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="prestja01">Jason Preston</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="harriga01">Gary Harris</Player>
          </Row>
          <Row>
            <Player player_id="hamptrj01">R.J. Hampton</Player>
          </Row>
          <Row>
            <Pick>2025 1st round pick</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="gordoaa01">Aaron Gordon</Player>
          </Row>
          <Row>
            <Player player_id="clarkga01">Gary Clark</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="teaguje01">Jeff Teague</Player>
          </Row>
          <Row>
            <Pick>2025 2nd round pick</Pick>
          </Row>
          <Row>
            <Pick>2027 2nd round pick</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="fournev01">Evan Fournier</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2021/03/25</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="cartewe01">Wendell Carter Jr.</Player>
          </Row>
          <Row>
            <Player player_id="porteot01">Otto Porter Jr.</Player>
          </Row>
          <Row>
            <Pick>2021 1st round pick</Pick>
            <Player player_id="wagnefr01">=&gt; Franz Wagner</Player>
          </Row>
          <Row>
            <Pick>2023 1st round pick</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="vucevni01">Nikola Vucevic</Player>
          </Row>
          <Row>
            <Player player_id="aminual01">Al-Farouq Aminu</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2020/11/18</DateTd>
        <DetailTd>
          <Row>
            <Pick>2022 2nd round pick</Pick>
          </Row>
          <Row>
            <Pick>2026 2nd round pick</Pick>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="nworajo01">=&gt; Jordan Nwora</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2020/02/06</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="ennisja01">James Ennis</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="reedpa01">=&gt; Paul Reed</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2019/06/20</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="reedpa01">=&gt; Paul Reed</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Player player_id="hortota01">=&gt; Talen Horton-Tucker</Player>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2019/02/07</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="fultzma01">Markelle Fultz</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="simmojo02">Jonathon Simmons</Player>
          </Row>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="edwarca01">=&gt; Carsen Edwards</Player>
          </Row>
          <Row>
            <Pick>2020 1st round pick</Pick>
            <Player player_id="maxeyty01">=&gt; Tyrese Maxey</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/23</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="martija01">Jarell Martin</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="johnsda04">Dakari Johnson</Player>
          </Row>
          <Row>
            <Player player_id="harvety01">Tyler Harvey</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/20</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="johnsda04">Dakari Johnson</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="purviro01">Rodney Purvis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/07/07</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="mozgoti01">Timofey Mozgov</Player>
          </Row>
          <Row>
            <Player player_id="grantje02">Jerian Grant</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="biyombi01">Bismack Biyombo</Player>
          </Row>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="martico01">=&gt; Cody Martin</Player>
          </Row>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="madarya01">=&gt; Yam Madar</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/06/21</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="jacksju02">Justin Jackson</Player>
          </Row>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="martico01">=&gt; Cody Martin</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="vandeja01">Jarred Vanderbilt</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2018/02/08</DateTd>
        <DetailTd>
          <Row>
            <Pick>2018 2nd round pick</Pick>
            <Player player_id="vandeja01">=&gt; Jarred Vanderbilt</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="paytoel01">Elfrid Payton</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/06/22</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 1st round pick</Pick>
            <Player player_id="maxeyty01">=&gt; Tyrese Maxey</Player>
          </Row>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="madarya01">=&gt; Yam Madar</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="pasecan01">Anzejs Pasecniks</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/06/22</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="hortota01">=&gt; Talen Horton-Tucker</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="rabbiv01">Ivan Rabb</Player>
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
            <Pick>2018 2nd round pick</Pick>
            <Player player_id="kurucro01">=&gt; Rodions Kurucs</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2017/02/14</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="rosste01">Terrence Ross</Player>
          </Row>
          <Row>
            <Pick>2017 1st round pick</Pick>
            <Player player_id="pasecan01">=&gt; Anzejs Pasecniks</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="ibakase01">Serge Ibaka</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/07/15</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="wilcocj01">C.J. Wilcox</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="marblde01">Devyn Marble</Player>
          </Row>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="careyve01">=&gt; Vernon Carey Jr.</Player>
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
            <Player player_id="napiesh01">Shabazz Napier</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/29</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="meeksjo01">Jodie Meeks</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="handsja01">=&gt; Jaylen Hands</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/23</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="ibakase01">Serge Ibaka</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="oladivi01">Victor Oladipo</Player>
          </Row>
          <Row>
            <Player player_id="ilyaser01">Ersan Ilyasova</Player>
          </Row>
          <Row>
            <Player player_id="sabondo01">Domantas Sabonis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/06/23</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="handsja01">=&gt; Jaylen Hands</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="laymaja01">Jake Layman</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/02/18</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="cunnija01">Jared Cunningham</Player>
          </Row>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Player player_id="careyve01">=&gt; Vernon Carey Jr.</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="fryech01">Channing Frye</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/02/16</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="ilyaser01">Ersan Ilyasova</Player>
          </Row>
          <Row>
            <Player player_id="jennibr01">Brandon Jennings</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="harrito02">Tobias Harris</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2016/01/12</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="harrijo01">Joe Harris</Player>
          </Row>
          <Row>
            <Pick>2017 2nd round pick</Pick>
            <Protected>=&gt; protected</Protected>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Protected>=&gt; protected</Protected>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/27</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="napiesh01">Shabazz Napier</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2016 2nd round pick</Pick>
            <Protected>=&gt; protected</Protected>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/12</DateTd>
        <DetailTd>
          <Row>
            <Pick>2020 2nd round pick</Pick>
            <Protected>=&gt; protected</Protected>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="harklma01">Maurice Harkless</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/07/09</DateTd>
        <DetailTd>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="edwarca01">=&gt; Carsen Edwards</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="oquinky01">Kyle O'Quinn</Player>
          </Row>
          <Row>
            <Pick>2019 2nd round pick</Pick>
            <Player player_id="brazdig01">=&gt; Ignas Brazdeikis</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2015/06/24</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="timmaja01">Janis Timma</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="ridnolu01">Luke Ridnour</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/07/14</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="randoan01">Anthony Randolph</Player>
          </Row>
          <Row>
            <Pick>2015 2nd round pick</Pick>
            <Player player_id="harvety01">=&gt; Tyler Harvey</Player>
          </Row>
          <Row>
            <Pick>2016 2nd round pick</Pick>
            <Player player_id="laymaja01">=&gt; Jake Layman</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="rakovmi01">Milovan Rakovic</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/06/26</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="paytoel01">Elfrid Payton</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="saricda01">Dario Saric</Player>
          </Row>
          <Row>
            <Pick>2015 2nd round pick</Pick>
            <Player player_id="hernawi01">=&gt; Willy Hernangomez</Player>
          </Row>
          <Row>
            <Pick>2017 1st round pick</Pick>
            <Player player_id="foxde01">=&gt; De'Aaron Fox</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2014/06/26</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="fournev01">Evan Fournier</Player>
          </Row>
          <Row>
            <Player player_id="marblde01">Devyn Marble</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="afflaar01">Arron Afflalo</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2013/02/21</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="lambdo01">Doron Lamb</Player>
          </Row>
          <Row>
            <Player player_id="harrito02">Tobias Harris</Player>
          </Row>
          <Row>
            <Player player_id="udrihbe01">Beno Udrih</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="redicjj01">J.J. Redick</Player>
          </Row>
          <Row>
            <Player player_id="ayongu01">Gustavo Ayon</Player>
          </Row>
          <Row>
            <Player player_id="smithis01">Ish Smith</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2013/02/21</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="warriha01">Hakim Warrick</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="mcrobjo01">Josh McRoberts</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2012/08/10</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="mcrobjo01">Josh McRoberts</Player>
          </Row>
          <Row>
            <Player player_id="eyengch01">Christian Eyenga</Player>
          </Row>
          <Row>
            <Player player_id="harklma01">Maurice Harkless</Player>
          </Row>
          <Row>
            <Player player_id="vucevni01">Nikola Vucevic</Player>
          </Row>
          <Row>
            <Player player_id="afflaar01">Arron Afflalo</Player>
          </Row>
          <Row>
            <Player player_id="harrial01">Al Harrington</Player>
          </Row>
          <Row>
            <Pick>2013 2nd round pick</Pick>
            <Player player_id="osbyro01">=&gt; Romero Osby</Player>
          </Row>
          <Row>
            <Pick>2014 1st round pick</Pick>
            <Player player_id="saricda01">=&gt; Dario Saric</Player>
          </Row>
          <Row>
            <Pick>2015 2nd round pick</Pick>
            <Protected>=&gt; protected</Protected>
          </Row>
          <Row>
            <Pick>2017 1st round pick</Pick>
            <Player player_id="foxde01">=&gt; De'Aaron Fox</Player>
          </Row>
          <Row>
            <Pick>2017 2nd round pick</Pick>
            <Player player_id="iwundwe01">=&gt; Wesley Iwundu</Player>
          </Row>
          <Row>
            <Pick>2018 2nd round pick</Pick>
            <Player player_id="kurucro01">=&gt; Rodions Kurucs</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="howardw01">Dwight Howard</Player>
          </Row>
          <Row>
            <Player player_id="duhonch01">Chris Duhon</Player>
          </Row>
          <Row>
            <Player player_id="clarkea01">Earl Clark</Player>
          </Row>
          <Row>
            <Player player_id="richaja01">Jason Richardson</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2012/07/11</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="ayongu01">Gustavo Ayon</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="anderry01">Ryan Anderson</Player>
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
            <Player player_id="davisgl01">Glen Davis</Player>
          </Row>
          <Row>
            <Player player_id="wafervo01">Von Wafer</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="bassbr01">Brandon Bass</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2011/06/23</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="harpeju01">Justin Harper</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Pick>2013 2nd round pick</Pick>
            <Player player_id="crabbal01">=&gt; Allen Crabbe</Player>
          </Row>
          <Row>
            <Pick>2014 2nd round pick</Pick>
            <Player player_id="harrijo01">=&gt; Joe Harris</Player>
          </Row>
        </DetailTd>
      </Tr>
      <Tr>
        <DateTd>2010/12/18</DateTd>
        <DetailTd>
          <Row>
            <Player player_id="arenagi01">Gilbert Arenas</Player>
          </Row>
          <Row>
            <Player player_id="richaja01">Jason Richardson</Player>
          </Row>
          <Row>
            <Player player_id="turkohe01">Hedo Turkoglu</Player>
          </Row>
          <Row>
            <Player player_id="clarkea01">Earl Clark</Player>
          </Row>
        </DetailTd>
        <DetailTd>
          <Row>
            <Player player_id="lewisra02">Rashard Lewis</Player>
          </Row>
          <Row>
            <Player player_id="cartevi01">Vince Carter</Player>
          </Row>
          <Row>
            <Player player_id="pietrmi01">Mickael Pietrus</Player>
          </Row>
          <Row>
            <Player player_id="gortama01">Marcin Gortat</Player>
          </Row>
          <Row>
            <Pick>2011 1st round pick</Pick>
            <Player player_id="mirotni01">=&gt; Nikola Mirotic</Player>
          </Row>
          <Row>
            <Cash>cash</Cash>
          </Row>
        </DetailTd>
      </Tr>
    </Table>
  </Template>
);
export default Trade;
