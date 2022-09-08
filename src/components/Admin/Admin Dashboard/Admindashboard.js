import React, { useEffect, useState} from "react";
import { API } from "../../../App";
import { AdminpendingToken } from "./AdminpendingToken";

export function Admindashboard() {
  const userName = localStorage.getItem("username");

  const [datas, setdatas] = useState([]);
  const [re, setre] = useState("kk");

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
  console.log(datas);

  return (
    <div>
      <div className="welcomeAdmin">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        Tokens are waiting for You
      </div>

      <div>
        {datas.map((e) => {
          return (
            <div>
              <div>
                <AdminpendingToken
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
