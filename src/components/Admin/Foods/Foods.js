import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API } from "../../../App";
import { Showfoods } from "./Showfoods";

export function Foods() {
  const navigate = useNavigate();
  const [foods, setfoods] = useState([]);
  const [re, setre] = useState("k");
  useEffect(() => {
    fetch(`${API}/getfoods`)
      .then((data) => data.json())
      .then((e) => setfoods(e))
      .then((e) => setre(e));
  }, [re]);

  const addfood = () => {
    navigate("AddFoods");
  };
  const userName = localStorage.getItem("username");


  return (
    <div className="Food_container">
      <div className="welcomeAdmin">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        Add some more type of foods for our employes
      </div>
      <div className="flex">
        {foods.map((e) => {
          return (
            <div>
              <div>
                <Showfoods
                  name={e.foodname}
                  Notes={e.description}
                  id={e._id}
                  img={e.img} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="Food_btn">
        <Button variant="contained" onClick={addfood}>
          Add More Foods
        </Button>
      </div>
    </div>
  );
}
