import React, { useEffect } from "react";
import { API } from "../../../App";
import { AdmindashboardacceptedTokenlist } from "./AdmindashboardacceptedTokenlist";

export function AdmindashboardAcceptedToken() {
  const [data, setdata] = React.useState([]);
  const [re, setre] = React.useState([]);
  useEffect(() => {
    fetch(`${API}/acceptedTokens`)
      .then((data) => data.json())
      .then((data) => {
        setdata(data);
      })
      .then(() => setre("done"));
  }, [re]);
  console.log(data);
  const userName = localStorage.getItem("username");

  return (
    <div>
      <div className="welcomeAdmin">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        Accepted Tokens will display here
      </div>
      <div>
        {data.map((data) => {
          return (
            <div>
              <AdmindashboardacceptedTokenlist
                id={data._id}
                name={data.foodName}
                notes={data.description}
                date={data.Date}
                time={data.Time}
                username={data.username}
                img={data.img}
                orderid={data.OrderId} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
