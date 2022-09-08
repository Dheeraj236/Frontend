import React, { useEffect } from "react";
import { API } from "../../App";
import { DisplaypendingTokens } from "./DisplaypendingTokens";

export function PendingToken() {
  const userName = localStorage.getItem("username");

  const [datas, setdatas] = React.useState([]);
  const [re, setre] = React.useState("kk");
  useEffect(() => {
    fetch(`${API}/getpendingTokens`)
      .then((data) => data.json())
      .then((data) => {
        setdatas(data);
      })
      .then((data) => {
        setre(data);
      });
  }, [re]);

  const yours = [];
  datas.map((e) => {
    if (e.username === userName) {
      yours.push(e);
      console.log(yours);
    } else {
      console.log(" ");
    }
  });

  return (
    <div className="pentoken">
      <div>
        <div className="welcome">
          <h3>
            welcome <span className="username">{userName}</span>.
          </h3>
          You can find the pending tokens here.
        </div>
{/* displaying the data by using DisplaypendingTokens */}
        {yours.map((e) => {
          return (
            <div>
              <div>
                <DisplaypendingTokens
                  id={e._id}
                  username={e.username}
                  notes={e.description}
                  name={e.Foodname}
                  date={e.Date}
                  time={e.Time}
                  img={e.img} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
