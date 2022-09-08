import React, { useEffect } from "react";
import { API } from "../../App";
import { Makeorder } from "./Makeorder.1";

export function RequestToken() {
  const [orderfood, setfoods] = React.useState([]);
  const userName = localStorage.getItem("username");
  const [re, setre] = React.useState("k");
  useEffect(() => {
    fetch(`${API}/getfoods`)
      .then((data) => data.json())
      .then((e) => setfoods(e))
      .then((e) => setre(e));
  }, [re]);

  return (
    <div className="reqtoken">
      <div className="welcome">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        You can Order food here.
      </div>
      {orderfood.map((e) => {
        return (
          <div>
            <div className="flex">
              <Makeorder
                name={e.foodname}
                notes={e.description}
                id={e._id}
                img={e.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
