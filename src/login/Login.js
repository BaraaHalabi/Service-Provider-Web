import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import maleImg from "../img/login-male.webp";
import femaleImg from "../img/login-female.webp";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const focusHandler = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const validateInput = (field, value) => {
    let isValid = true;
    let errorMessage = "";

    switch (field) {
      case "email":
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-0-9.-]+\.[A-Z]{2,}$/i;
        isValid = emailRegex.test(value);
        errorMessage = !isValid ? "Invalid email address." : "";
        break;
      case "password":
        isValid = value.length >= 6;
        errorMessage = !isValid
          ? "Password must be at least 6 characters long."
          : "";
        break;
      default:
        break;
    }

    return { isValid, errorMessage };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { email, password } = data;
    const { isValid: emailIsValid, errorMessage: emailError } = validateInput(
      "email",
      email
    );
    const { isValid: passwordIsValid, errorMessage: passwordError } =
      validateInput("password", password);

    if (!emailIsValid || !passwordIsValid) {
      setErrors({ email: emailError, password: passwordError });
      setIsLoading(false);
      return;
    }

    const userData = { email: email.trim(), password: password.trim() };

    axios
      .post("http://127.0.0.1:8000/api/user_login", userData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          const userID = response.data.user.id;
          localStorage.setItem("token", token);
          localStorage.setItem("userID", userID);
          notify("You logged in successfully", "success");
          setIsLoggedIn(true);
          navigate("/");
        } else {
          notify("An error occurred.", "error");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        notify("Wrong email or password.", "error");
        setIsLoading(false);
      });
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
        <h2>Hello Again Ready to Dive In?</h2>
        <div>
          <div className={styles.inputWithIcon}>
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="  E-mail"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`${styles.customIcon} ${styles.emailIcon}`}
            />
          </div>
          {errors.email && touched.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>
        <div>
          <div className={styles.inputWithIcon}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              placeholder="  Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon
              icon={faLock}
              className={`${styles.customIcon} ${styles.lockIcon}`}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
            />
          </div>
          {errors.password && touched.password && (
            <span className="error">{errors.password}</span>
          )}
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
            New here?&nbsp;
            <Link to="/sign-up" style={{ color: "white" }}>
              Register Now
            </Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
