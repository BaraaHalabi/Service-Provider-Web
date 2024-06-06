import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userIcon from "../img/user.svg";

// Validate
import { validate } from "./validate";
// Styles
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
// Toast
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
//
import { Link } from "react-router-dom";
// Axios
import axios from "axios";
import maleImg from "../img/login-male.webp";
import femaleImg from "../img/login-female.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"; // Import the icons
import { useAuth } from "../auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth;
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

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
    if (!Object.keys(errors).length) {
      axios
        .post("http://127.0.0.1:8000/api/register", data)
        .then((response) => {
          if (response.status === 201) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            notify("You signed up successfully", "success");
            setIsLoggedIn(true);
            navigate("/");
          } else {
            notify("An error occurred.", "error");
          }
        })
        .catch((error) => {
          console.error(error);
          notify("Sign up failed.", "error");
        });
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.formLogin}
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <img src={maleImg} className={styles.maleImage} alt="male-img" />
        <img src={femaleImg} className={styles.femaleImage} alt="female-img" />

        <h1 className={styles.headerTitle}>Service Station</h1>
        <h2> Create Your Account and Dive In!</h2>
        <div className={styles.inputWithIcon}>
          <div
            className={
              errors.name && touched.name
                ? styles.unCompleted
                : !errors.name && touched.name
                ? styles.completed
                : undefined
            }
          >
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder=" Name"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
          </div>
          {/* {errors.name && touched.name && (
            <span className={styles.error}>{errors.name}</span>
          )} */}
        </div>
        <div className={styles.inputWithIcon}>
          <div
            className={
              errors.email && touched.email
                ? styles.unCompleted
                : !errors.email && touched.email
                ? styles.completed
                : undefined
            }
          >
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="   E-mail"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faEnvelope} className={styles.customIcon} />
          </div>

          {/* {errors.email && touched.email && (
            <span className={styles.error}>{errors.email}</span>
          )} */}
        </div>
        <div className={styles.inputWithIcon}>
          <div
            className={
              errors.password && touched.password
                ? styles.unCompleted
                : !errors.password && touched.password
                ? styles.completed
                : undefined
            }
          >
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="    Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
          </div>
          <FontAwesomeIcon icon={faLock} className={styles.customIcon} />{" "}
        </div>

        <div className={styles.inputWithIcon}>
          <div
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.unCompleted
                : !errors.confirmPassword && touched.confirmPassword
                ? styles.completed
                : !errors.confirmPassword && touched.confirmPassword
                ? styles.completed
                : undefined
            }
          >
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="    Confirm Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faLock} className={styles.customIcon} />{" "}
          </div>
        </div>

        <div>
          <button type="submit">Create Account</button>
          <span
            style={{
              color: "white",
              textAlign: "center",
              display: "inline-block",
              width: "100%",
            }}
          >
            Already registered?&nbsp;
            <Link
              to="/login"
              style={{
                color: "white",
              }}
            >
              Log In
            </Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
