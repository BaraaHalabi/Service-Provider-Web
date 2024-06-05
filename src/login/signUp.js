import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
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
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const focusHandler = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      axios
        .post("http://127.0.0.1:8000/api/user_register", data)
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
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Sign Up</h1>
        <div className={styles.inputWithIcon}>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
          {errors.name && touched.name && (
            <span className={styles.error}>{errors.name}</span>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <FontAwesomeIcon icon={faEnvelope} className={styles.customIcon} />
          {errors.email && touched.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <FontAwesomeIcon icon={faLock} className={styles.customIcon} />
          {errors.password && touched.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <FontAwesomeIcon icon={faLock} className={styles.customIcon} />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formCheckbox}>
          <label>
            <input
              type="checkbox"
              name="isAccepted"
              checked={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            I accept the terms and conditions
          </label>
          {errors.isAccepted && touched.isAccepted && (
            <span className={styles.error}>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <button type="submit">Sign Up</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
