import React, { useState } from "react";
import emailIcon from "../img/email.svg";
import passwordIcon from "../img/password.svg";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import axios from "axios";
import maleImg from "../img/login-male.webp";
import femaleImg from "../img/login-female.webp";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const chaeckData = (obj) => {
    const { email, password } = obj;
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    const api = axios
      .get(urlApi)
      .then((response) => response.data)
      .then((data) =>
        data.ok
          ? notify("You login to your account successfully", "success")
          : notify("Your password or your email is wrong", "error")
      );
    toast.promise(api, {
      pending: "Loading your data...",
      success: false,
      error: "Something went wrong!",
    });
  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    chaeckData(data);
  };

  return (
    <div className={styles.container}>
      <form
        className={`${styles.glass} ${styles.formLogin}`}
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <img src={maleImg} className={styles.maleImage} alt="male-img" />
        <img src={femaleImg} className={styles.femaleImage} alt="female-img" />

        <header>
          <h1 className={styles.headerTitle}>Service Station</h1>
        </header>
        <h2>Welcome!</h2>
        <div>
          <div>
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="E-mail"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            {/* <img src={emailIcon} alt="" /> */}
          </div>
        </div>
        <div>
          <div>
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            {/* <img src={passwordIcon} alt="" /> */}
          </div>
        </div>

        <div>
          <button type="submit">Login</button>
          <span
            style={{
              color: "white",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Don't have an account?{" "}
            <Link to="/sign-up" style={{ color: "white" }}>
              Create account
            </Link>
          </span>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
