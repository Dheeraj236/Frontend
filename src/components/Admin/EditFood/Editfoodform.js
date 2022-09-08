import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../../App";


export function Editfoodform({ name, notes, img }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [names, setnames] = React.useState("name");

  useEffect(() => setnames("name"), []);

  const formvalidationSchema = yup.object({
    editfood: yup.string().required("Food name is required ⚠️"),
    editnotes: yup.string().required("Notes is required ⚠️"),
    editimg: yup.string().required("Notes is required ⚠️"),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      editfood: `${name}`,
      editnotes: `${notes}`,
      editimg: `${img}`,
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      Updatefood(values);
    },
  });

  const Updatefood = async (event) => {
    try {
      const fet = await fetch(`${API}/updatefood/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          foodName: values.editfood,
          Notes: values.editnotes,
          img: values.editimg,
        }),
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      if (fet.status === 200) {
        window.alert("successfully updated");

        navigate("/Foods");
      } else {
        window.alert("Something went worng");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="editfoodform">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="New Name"
            name="editfood"
            value={values.editfood}
            error={errors.editfood && touched.editfood}
            helperText={errors.editfood && touched.editfood ? errors.editfood : ``}
            onChange={handleChange}
            variant="standard" />
          <TextField
            id="standard-basic"
            name="editnotes"
            value={values.editnotes}
            error={errors.editnotes && touched.editnotes}
            helperText={errors.editnotes && touched.editnotes ? errors.editnotes : ``}
            onChange={handleChange}
            label="suggestions"
            variant="standard" />

          <TextField
            id="standard-basic"
            name="editimg"
            value={values.editimg}
            error={errors.editimg && touched.editimg}
            helperText={errors.editimg && touched.editimg ? errors.editimg : ``}
            onChange={handleChange}
            label="suggestions"
            variant="standard" />
          <Button variant="contained" type="submit">
            UPDATE
          </Button>
        </form>
      </div>
    </div>
  );
}
