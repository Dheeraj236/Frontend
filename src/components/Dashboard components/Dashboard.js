import React, { useEffect } from "react";
import { API } from "../../App";
import { DisplayavaliableTokens } from "./DisplayavaliableTokens.1";

export function Dashboard() {


  const userName = localStorage.getItem("username");



  const [datas, setdatas] = React.useState([]);
  const [re, setre] = React.useState("kk");

  useEffect(() => {
    fetch(`${API}/acceptedTokens`)
      .then((data) => data.json())
      .then((data) => {
        setdatas(data)
      }).then((data) => {
        setre(data);
      });
  }, [re]);
  

  const yours = [];
  datas.map((e) => {
    if (e.username === userName) {
      yours.push(e);
     
    } else {
      console.log(" ");
    }
  });

  return (
    <div>
      
      <div className="welcome">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        You's avaliable food tokens will display here.
      </div>
      <div>
        {yours.map((data) => {
          return (
            <div className="makereverse">
              <DisplayavaliableTokens
                orderid={data.OrderId}
                img={data.img}
                username={data.username}
                notes={data.description}
                name={data.foodName}
                date={data.Date}
                time={data.Time} />
            </div>
          );
        })}
      </div>
    </div>
  );
}