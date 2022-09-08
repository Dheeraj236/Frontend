import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../../App";

export function Admin() {
  const navigate = useNavigate();

  const Adminsubmit = async (event) => {
    try {
      const fet = await fetch(`${API}/adminlogin`, {
        method: "POST",
        body: JSON.stringify({
          username: values.tempuser,
          password: values.tempass,
        }),
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      if (fet.status === 400 || !fet) {
        window.alert("Invalid credentials");
      } else {
        localStorage.setItem("username", values.tempuser);
        window.alert("successfull login");
        navigate("/Admindashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formvalidationSchema = yup.object({
    tempuser: yup.string().required("UserName is required "),

    tempass: yup.string().required("Password is required "),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      tempuser: "Admin123",
      tempass: "1234",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      Adminsubmit(values);
    },
  });

  return (
    <div className="admin">
       <div className="signin">
        <h3>
          Users signin?   <span>
            <Button variant="contained"
            onClick={() => {
              navigate("/Sigin");
            }}
            sx={{ marginBottom: "2%" }}
            >signin</Button>
          </span>
        </h3>
      </div>
      <div className="login-btns">
        <Fab
          variant="extended,contained"
          color="success"
          sx={{ margin: "3% 6%", width: "12rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
          User sign up
        </Fab>

        <Fab
          variant="extended,contained"
          color="primary"
          sx={{ margin: "3% 6%", width: "12rem" }}
          onClick={() => {
            navigate("/Admin");
          }}
        >
          Admin login
        </Fab>
      </div>

      <div className="login-input">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Admin ID"
            name="tempuser"
            value={values.tempuser}
            error={errors.tempuser && touched.tempuser}
            helperText={errors.tempuser && touched.tempuser ? errors.tempuser : ``}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            name="tempass"
            value={values.tempass}
            error={errors.tempass && touched.tempass}
            helperText={errors.tempass && touched.tempass ? errors.tempass : ``}
            onChange={handleChange}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }} />

          <Button type="SUBMIT">Admin sigin</Button>
        </form>
      </div>
    </div>
  );
}
