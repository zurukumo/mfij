import './index.css'

import Template from 'components/Template'

const Trade = () => (
  <Template title="トレード歴史">
    <div className="my_table flex">
      <div className="tr">
        <div className="date">
          <div>日付</div>
        </div>
        <div className="acquire">獲得</div>
        <div className="release">放出</div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2021/07/29</div>
        </div>
        <div className="acquire">
          <div className="pick">2026 2nd round pick</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Jason Preston</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2021/03/25</div>
        </div>
        <div className="acquire">
          <div className="player">Gary Harris</div>
          <div className="player">R.J. Hampton</div>
          <div className="pick">2025 1st round pick</div>
        </div>
        <div className="release">
          <div className="player">Aaron Gordon</div>
          <div className="player">Gary Clark</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2021/03/25</div>
        </div>
        <div className="acquire">
          <div className="player">Jeff Teague</div>
          <div className="pick">2025 2nd round pick</div>
          <div className="pick">2027 2nd round pick</div>
        </div>
        <div className="release">
          <div className="player">Evan Fournier</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2021/03/25</div>
        </div>
        <div className="acquire">
          <div className="player">Wendell Carter Jr.</div>
          <div className="player">Otto Porter Jr.</div>
          <div>
            <div className="pick">2021 1st round pick</div>
            <div className="player">=&gt; Franz Wagner</div>
          </div>
          <div className="pick">2023 1st round pick</div>
        </div>
        <div className="release">
          <div className="player">Nikola Vucevic</div>
          <div className="player">Al-Farouq Aminu</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2020/11/18</div>
        </div>
        <div className="acquire">
          <div className="pick">2022 2nd round pick</div>
          <div className="pick">2026 2nd round pick</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Jordan Nwora</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2020/02/06</div>
        </div>
        <div className="acquire">
          <div className="player">James Ennis</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Paul Reed</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2019/06/20</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Paul Reed</div>
          </div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Talen Horton-Tucker</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2019/02/07</div>
        </div>
        <div className="acquire">
          <div className="player">Markelle Fultz</div>
        </div>
        <div className="release">
          <div className="player">Jonathon Simmons</div>
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Carsen Edwards</div>
          </div>
          <div>
            <div className="pick">2020 1st round pick</div>
            <div className="player">=&gt; Tyrese Maxey</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2018/07/23</div>
        </div>
        <div className="acquire">
          <div className="player">Jarell Martin</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Dakari Johnson</div>
          <div className="player">Tyler Harvey</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2018/07/20</div>
        </div>
        <div className="acquire">
          <div className="player">Dakari Johnson</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Rodney Purvis</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2018/07/07</div>
        </div>
        <div className="acquire">
          <div className="player">Timofey Mozgov</div>
          <div className="player">Jerian Grant</div>
        </div>
        <div className="release">
          <div className="player">Bismack Biyombo</div>
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Cody Martin</div>
          </div>
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Yam Madar</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2018/06/21</div>
        </div>
        <div className="acquire">
          <div className="player">Justin Jackson</div>
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Cody Martin</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Jarred Vanderbilt</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2018/02/08</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2018 2nd round pick</div>
            <div className="player">=&gt; Jarred Vanderbilt</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Elfrid Payton</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2017/06/22</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2020 1st round pick</div>
            <div className="player">=&gt; Tyrese Maxey</div>
          </div>
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Yam Madar</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Anzejs Pasecniks</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2017/06/22</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Talen Horton-Tucker</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Ivan Rabb</div>
        </div>
      </div>

      <div className="tr">
        <div className="description">
          ロブ・へニガン体制からジョン・ハモンド&ジェフ・ウェルトマン体制に
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2017/02/14</div>
        </div>
        <div className="acquire">
          <div className="player">Terrence Ross</div>
          <div>
            <div className="pick">2017 1st round pick</div>
            <div className="player">=&gt; Anzejs Pasecniks</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Serge Ibaka</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/07/15</div>
        </div>
        <div className="acquire">
          <div className="player">C.J. Wilcox</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Roy Devyn Marble</div>
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Vernon Carey Jr.</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/07/07</div>
        </div>
        <div className="acquire">
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Shabazz Napier</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/06/29</div>
        </div>
        <div className="acquire">
          <div className="player">Jodie Meeks</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Jaylen Hands</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/06/23</div>
        </div>
        <div className="acquire">
          <div className="player">Serge Ibaka</div>
        </div>
        <div className="release">
          <div className="player">Victor Oladipo</div>
          <div className="player">Ersan Ilyasova</div>
          <div className="player">Domantas Sabonis</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/06/23</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Jaylen Hands</div>
          </div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Jake Layman</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/02/18</div>
        </div>
        <div className="acquire">
          <div className="player">Jared Cunningham</div>
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="player">=&gt; Vernon Carey Jr.</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Channing Frye</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/02/16</div>
        </div>
        <div className="acquire">
          <div className="player">Ersan Ilyasova</div>
          <div className="player">Brandon Jennings</div>
        </div>
        <div className="release">
          <div className="player">Tobias Harris</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2016/01/12</div>
        </div>
        <div className="acquire">
          <div className="player">Joe Harris</div>
          <div>
            <div className="pick">2017 2nd round pick</div>
            <div className="protected">=&gt; Protected</div>
          </div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="protected">=&gt; Protected</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2015/07/27</div>
        </div>
        <div className="acquire">
          <div className="player">Shabazz Napier</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2016 2nd round pick</div>
            <div className="protected">=&gt; Protected</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2015/07/12</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2020 2nd round pick</div>
            <div className="protected">=&gt; Protected</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Maurice Harkless</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2015/07/09</div>
        </div>
        <div className="acquire">
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Carsen Edwards</div>
          </div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Kyle O'Quinn</div>
          <div>
            <div className="pick">2019 2nd round pick</div>
            <div className="player">=&gt; Ignas Brazdeikis</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2015/06/24</div>
        </div>
        <div className="acquire">
          <div className="player">Janis Timma</div>
        </div>
        <div className="release">
          <div className="player">Luke Ridnour</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2014/07/14</div>
        </div>
        <div className="acquire">
          <div className="player">Anthony Randolph</div>
          <div>
            <div className="pick">2015 2nd round pick</div>
            <div className="player">=&gt; Tyler Harvey</div>
          </div>
          <div>
            <div className="pick">2016 2nd round pick</div>
            <div className="player">=&gt; Jake Layman</div>
          </div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">Milovan Rakovic</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2014/06/26</div>
        </div>
        <div className="acquire">
          <div className="player">Elfrid Payton</div>
        </div>
        <div className="release">
          <div className="player">Dario Saric</div>
          <div>
            <div className="pick">2015 2nd round pick</div>
            <div className="player">=&gt; Willy Hernangomez</div>
          </div>
          <div>
            <div className="pick">2017 1st round pick</div>
            <div className="player">=&gt; De'Aaron Fox</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2014/06/26</div>
        </div>
        <div className="release">
          <div className="player">Evan Fournier</div>
          <div className="player">Roy Devyn Marble</div>
        </div>
        <div className="acquire">
          <div className="player">Arron Afflalo</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2013/02/21</div>
        </div>
        <div className="acquire">
          <div className="player">Doron Lamb</div>
          <div className="player">Tobias Harris</div>
          <div className="player">Beno Udrih</div>
          <div className="cash">cash</div>
        </div>
        <div className="release">
          <div className="player">J.J. Redick</div>
          <div className="player">Gustavo Ayon</div>
          <div className="player">Ishmael Smith</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2013/02/21</div>
        </div>
        <div className="acquire">
          <div className="player">Hakim Warrick</div>
        </div>
        <div className="release">
          <div className="player">Josh McRoberts</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2012/08/10</div>
        </div>
        <div className="acquire">
          <div className="player">Josh McRoberts</div>
          <div className="player">Christian Eyenga</div>
          <div className="player">Maurice Harkless</div>
          <div className="player">Nikola Vucevic</div>
          <div className="player">Arron Afflalo</div>
          <div className="player">Al Harrington</div>
          <div>
            <div className="pick">2013 2nd round pick</div>
            <div className="player">=&gt; Romero Osby</div>
          </div>
          <div>
            <div className="pick">2014 1st round pick</div>
            <div className="player">=&gt; Dario Saric</div>
          </div>
          <div>
            <div className="pick">2015 2nd round pick</div>
            <div className="protected">=&gt; Protected</div>
          </div>
          <div>
            <div className="pick">2017 1st round pick</div>
            <div className="player">=&gt; De'Aaron Fox</div>
          </div>
          <div>
            <div className="pick">2017 2nd round pick</div>
            <div className="player">=&gt; Wesley Iwundu</div>
          </div>
          <div>
            <div className="pick">2018 2nd round pick</div>
            <div className="player">=&gt; Rodions Kurucs</div>
          </div>
        </div>
        <div className="release">
          <div className="player">Dwight Howard</div>
          <div className="player">Chris Duhon</div>
          <div className="player">Earl Clark</div>
          <div className="player">Jason Richardson</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2012/07/11</div>
        </div>
        <div className="acquire">
          <div className="player">Gustavo Ayon</div>
        </div>
        <div className="release">
          <div className="player">Ryan Anderson</div>
        </div>
      </div>

      <div className="tr">
        <div className="description">
          オーティス・スミス体制からロブ・ヘニガン体制に
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2011/12/12</div>
        </div>
        <div className="acquire">
          <div className="player">Glen Davis</div>
          <div className="player">Von Wafer</div>
        </div>
        <div className="release">
          <div className="player">Brandon Bass</div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2011/06/23</div>
        </div>
        <div className="acquire">
          <div className="player">Justin Harper</div>
        </div>
        <div className="release">
          <div>
            <div className="pick">2013 2nd round pick</div>
            <div className="player">=&gt; Allen Crabbe</div>
          </div>
          <div>
            <div className="pick">2014 2nd round pick</div>
            <div className="player">=&gt; Joe Harris</div>
          </div>
        </div>
      </div>

      <div className="tr">
        <div className="date">
          <div>2010/12/18</div>
        </div>
        <div className="acquire">
          <div className="player">Gilbert Arenas</div>
          <div className="player">Jason Richardson</div>
          <div className="player">Hidayet Turkoglu</div>
          <div className="player">Earl Clark</div>
        </div>
        <div className="release">
          <div className="player">Rashard Lewis</div>
          <div className="player">Vince Carter</div>
          <div className="player">Mickael Pietrus</div>
          <div className="player">Marcin Gortat</div>
          <div>
            <div className="pick">2011 1st round pick</div>
            <div className="player">=&gt; Nikola Mirotic</div>
          </div>
          <div className="cash">cash</div>
        </div>
      </div>
    </div>
  </Template>
);

export default Trade;
