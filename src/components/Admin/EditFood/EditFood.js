import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { API } from "../../../App";
import { Editfoodform } from "./Editfoodform";

export function EditFood() {
  const [foods, setfoods] = React.useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/foods/${id}`)
      .then((data) => data.json())
      .then((e) => setfoods(e));
  }, []);
  return (
    <div className="editfood">
      {foods ? (
        <Editfoodform
          img={foods.img}
          name={foods.foodname}
          notes={foods.description} />
      ) : (
        "Loadin..."
      )}
    </div>
  );
}
