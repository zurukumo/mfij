import { PLAYERS } from './datas'
import styles from './Detail.module.scss'

const BBR_URL = "https://www.basketball-reference.com/players";

const Detail = (props: { datas: string[] }) => (
  <>
    {props.datas.map((data, key) => (
      <div className={styles.row} key={key}>
        {data.split(",").map((target, idx) => {
          const [type, content] = target.split(":");

          return (
            <div key={idx}>
              {idx > 0 && "=> "}
              {type === "player" ? (
                <a
                  href={`${BBR_URL}/${content.slice(0, 1)}/${content}.html`}
                  target="blank"
                  className={styles[type]}
                >
                  {PLAYERS[content]}
                </a>
              ) : (
                <span className={styles[type]}>{content}</span>
              )}
            </div>
          );
        })}
      </div>
    ))}
  </>
);

export default Detail;
