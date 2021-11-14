import Player from './Player'

const Detail = (props: { datas: string[] }) => (
  <>
    {props.datas.map((data, key) => (
      <div className="my-4" key={key}>
        {data.split(",").map((target, idx) => {
          const [type, content] = target.split(":");
          if (type === "player") {
            return <Player id={content} idx={idx} key={idx} />;
          } else if (type === "pick") {
            const [year, round] = content.split("-");
            return (
              <div className="text-emerald-500" key={idx}>
                {year} {round}
                {round === "1" ? "st" : "nd"} round pick
              </div>
            );
          } else if (type === "manager") {
            return (
              <div className="font-bold" key={idx}>
                {content}
              </div>
            );
          } else if (type === "cash") {
            return (
              <div className="text-blue-500 font-bold" key={idx}>
                cash
              </div>
            );
          } else if (type === "protected") {
            return (
              <div className="text-red-500" key={idx}>
                <span className="text-black">=&gt; </span>protected
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    ))}
  </>
);

export default Detail;
