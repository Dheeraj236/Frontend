import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../../App";

export function AddFoods() {
  const navigate = useNavigate();
  const formvalidationSchema = yup.object({
    foodname: yup.string().required("Food name is required "),
    foodnote: yup.string().required("Notes is required "),
    foodimg: yup.string().required("Img Url is required "),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      foodname: "",
      foodnote: "",
      foodimg: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      Addfood(values);
    },
  });
// this function get call onces the add button getten click 
  const Addfood = async (event) => {
    try {
      const fet = await fetch(`${API}/addnewfood`, {
        method: "POST",
        body: JSON.stringify({
          food: values.foodname,
          notes: values.foodnote,
          img: values.foodimg,
        }),
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      if (fet.status === 200) {
        window.alert("successfully Added");

        navigate("/Foods");
      } else {
        window.alert("Item Already Added & Something went worng");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h3>Add some more foods for our Employes</h3>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          required
          label="Food Name"
          name="foodname"
          value={values.foodname}
          error={errors.foodname && touched.foodname}
          helperText={errors.foodname && touched.foodname ? errors.foodname : ``}
          onChange={handleChange}
          variant="standard" />
        <TextField
          id="standard-basic"
          name="foodnote"
          value={values.foodnote}
          error={errors.foodnote && touched.foodnote}
          helperText={errors.foodnote && touched.foodnote ? errors.foodnote : ``}
          onChange={handleChange}
          label="Suggestions"
          variant="standard" />

        <TextField
          id="standard-basic"
          name="foodimg"
          value={values.foodimg}
          error={errors.foodimg && touched.foodimg}
          helperText={errors.foodimg && touched.foodimg ? errors.foodimg : ``}
          onChange={handleChange}
          label="Img URL"
          variant="standard" />
        <Button variant="contained" type="submit">
          AddFood
        </Button>
      </form>
    </div>
  );
}