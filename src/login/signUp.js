import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../img/userDefaultImage.png";
import maleImg from "../img/login-male.webp";
import femaleImg from "../img/login-female.webp";
import { validate } from "./validate";
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
    profileImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else if (event.target.name === "profileImage") {
      const file = event.target.files[0];
      setData({ ...data, profileImage: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      axios
        .post("http://127.0.0.1:8000/api/register", formData)
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

        <div className={styles.formRow}>
          <div className={styles.profileImageContainer}>
            {imagePreview ? (
              <img
                src={imagePreview}
                className={styles.profileImage}
                alt="Profile"
              />
            ) : (
              <img
                src={userIcon}
                className={styles.profileImage}
                alt="Default Profile"
              />
            )}
            <label className={styles.imageInputLabel}>
              <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
              <input
                type="file"
                name="profileImage"
                onChange={changeHandler}
                className={styles.imageInput}
                accept="image"
              />
            </label>
          </div>

          <div className={`${styles.inputWithIcon} ${styles.nameInput}`}>
            <div>
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Name"
                onChange={changeHandler}
                onFocus={focusHandler}
                autoComplete="off"
              />
              <FontAwesomeIcon icon={faUser} className={styles.customIcon} />
            </div>
          </div>
        </div>

        <div className={styles.inputWithIcon}>
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
            <FontAwesomeIcon icon={faEnvelope} className={styles.customIcon} />
          </div>
        </div>

        <div className={styles.inputWithIcon}>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faLock} className={styles.customIcon} />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div className={styles.inputWithIcon}>
          <div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={data.confirmPassword}
              placeholder="Confirm Password"
              onChange={changeHandler}
              onFocus={focusHandler}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faLock} className={styles.customIcon} />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
              onClick={toggleConfirmPasswordVisibility}
            />
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
            <Link to="/login" style={{ color: "white" }}>
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
