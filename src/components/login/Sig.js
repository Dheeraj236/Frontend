import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function Sig() {
  const navigate = useNavigate();

    const Insubmit = async (event) => {
    const fet = await fetch(`${API}/sigin`, {
      method: "POST",
      body: JSON.stringify({
        username: values.user,
        password: values.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (fet.status === 400 || !fet) {
      window.alert("Invalid credentials");
    } else {
      localStorage.setItem("username", values.user);
      window.alert("successfull login");
      navigate("/Dashboard");
    }
  };
  const formvalidationSchema = yup.object({
    user: yup.string().required("UserName is required "),

    password: yup.string().required("Password is required "),
  });

  const { handleSubmit, values, handleChange,  errors, touched } =
    useFormik({
      initialValues: {
        user: "",
        password: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        Insubmit(values);
        
      },
    });

  return (
    <div className="sig">
      <h2>SIGN IN</h2>

      <form className="form" onSubmit={handleSubmit} >
        <TextField
          required
          id="outlined-required"
          label="User ID"
          name="user"
          value={values.user}
          error={errors.user && touched.user}
          helperText={errors.user && touched.user ? errors.user : ``}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={values.password}
          error={errors.password && touched.password}
          helperText={errors.password && touched.password ? errors.password : ``}
          onChange={handleChange}
          autoComplete="current-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="primary">sign in</Button>
      </form>
    </div>
  );
}