import './Detail.scss'

import { PLAYERS } from './datas'

const BBR_URL = "https://www.basketball-reference.com/players";

const Detail = (props: { datas: string[] }) => (
  <>
    {props.datas.map((data, key) => (
      <div className="row" key={key}>
        {data.split(",").map((target, idx) => {
          const [type, content] = target.split(":");

          return (
            <div key={idx}>
              {idx > 0 && "=> "}
              {type === "player" ? (
                <a
                  href={`${BBR_URL}/${content.slice(0, 1)}/${content}.html`}
                  target="blank"
                  className={type}
                >
                  {PLAYERS[content]}
                </a>
              ) : (
                <span className={type}>{content}</span>
              )}
            </div>
          );
        })}
      </div>
    ))}
  </>
);

export default Detail;
