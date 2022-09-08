import React, { useEffect } from "react";
import { API } from "../../App";

export function Profile() {
  const userName = localStorage.getItem("username");
  const [datas, setdatas] = React.useState("lo");

  useEffect(() => {
    fetch(`${API}/profile/${userName}`)
      .then((data) => data.json())
      .then((data) => {
        setdatas(data);
      });
  }, []);

  return (
    <div className="profile">
      <h2>profile</h2>

      <div className="profileBox">
        <table cellspacing="0">
          <tr cellspacing="0">
            <th cellspacing="0">userName :</th>
            <td cellspacing="0">{datas.username}</td>
          </tr>
          <tr cellspacing="0">
            <th cellspacing="0">E-Mail ID :</th>
            <td cellspacing="0">{datas.email}</td>
          </tr>
          <tr>
            <th>Employee ID:</th>
            <td>{datas.employeid}</td>
          </tr>
          <tr cellspacing="0">
            <th cellspacing="0">Phone Number :</th>
            <td cellspacing="0">{datas.phone}</td>
          </tr>
          <tr cellspacing="0">
            <th cellspacing="0">Address :</th>
            <td cellspacing="0">{datas.address} </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
