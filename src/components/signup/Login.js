import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function Login() {
  const navigate = useNavigate();
  const formvalidate = yup.object({
    user: yup
      .string()
      .required()
      .min(4)
      .max(25),
    email: yup
      .string()
      .required()
      .max(30)
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    password: yup
      .string()
      .required()
      .min(4)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        `Must contain
       one uppercase,
       lowercase, 
       number,special character`
      ),
    employee: yup.string().required("fill this").min(2),
    phone: yup.string().required("complete it").min(2),
    address: yup.string().required("complete it").min(2).max(36),
  });

  const { handleChange, handleSubmit, values, errors,  touched } = useFormik({
    initialValues: {
      user: "",
      email: "",
      password: "",
      employee: "",
      phone: "",
      address: "",
    },
    validationSchema: formvalidate,
    onSubmit: (values) => {
      signupsuccess(values);
    },
  });

  const signupsuccess = async (event) => {
    try {
      const fet = await fetch(`${API}/signup`, {
        method: "POST",
        body: JSON.stringify({
          username: values.user,
          email: values.email,
          password: values.password,
          employeid: values.employee,
          phone: values.phone,
          address: values.address,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (fet.status === 400 || !fet || fet.status === 404) {
        window.alert("Try New Username");
      } else {
        window.alert("successfully signup");
        navigate("/Sigin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="signin">
        <h3>
          Already signup?   <span>
            <Button variant="contained"
            onClick={() => {
              navigate("/Sigin");
            }}
            sx={{ marginBottom: "2%" }}
            >sign In</Button>
          </span>
        </h3>
      </div>
      <div className="login-btns">
        <div>

        </div>
        <Fab
          variant="extended,contained"
          color="success"
          sx={{ margin: "3% 6%", width: "12rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
        sign up
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
            id="outlined-requireds"
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
            }} />
          <TextField
            required
            id="outlined-password-input"
            label="E-mail Id"
            type="email"
            name="email"
            error={errors.email && touched.email}
            value={values.email}
            onChange={handleChange}
            helperText={errors.email && touched.email ? errors.email : ``}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            value={values.password}
            name="password"
            error={errors.password && touched.password}
            onChange={handleChange}
            helperText={errors.password && touched.password ? errors.password : ``}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Employe id"
            name="employee"
            error={errors.employee && touched.employee}
            value={values.employee}
            onChange={handleChange}
            helperText={errors.employee && touched.employee ? errors.employee : ``}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Phone Number"
            value={values.phone}
            error={errors.phone && touched.phone}
            helperText={errors.phone && touched.phone ? errors.phone : ``}
            onChange={handleChange}
            name="phone"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
               </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
            error={errors.address && touched.address}
            helperText={errors.address && touched.address ? errors.address : ``}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }} />

          <Button type="submit"  variant="contained"
          color="primary">Sign up</Button>
       
        </form>
      </div>
    </div>
  );
}