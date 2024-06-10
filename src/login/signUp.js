import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../img/userDefaultImage.png";
import maleImg from "../img/login-male.webp";
import femaleImg from "../img/login-female.webp";
import { validate } from "./validate";
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
import countryList from "../components/Countrylist";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SignUp = ({ setProfileImage, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    profileImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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

  const notify = (message, type) => {
    toast[type](message);
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
          console.log("Response:", response);
          if (response.status === 201 || response.status === 200) {
            const { token, userId } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            notify("You signed up successfully", "success");
            setIsLoggedIn(true);
            setProfileImage(imagePreview || userIcon);
            navigate("/");
          } else {
            notify("An error occurred.", "error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          notify("Sign up failed.", "error");
        });
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        location: true,
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
                accept="image/png, image/jpeg"
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
            {/* {errors.name && touched.name && <span>{errors.name}</span>} */}
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
          {/* {errors.email && touched.email && <span>{errors.email}</span>} */}
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
          {/* {errors.password && touched.password && (
            <span>{errors.password}</span>
          )} */}
        </div>

        <div className={styles.inputWithIcon}>
          <div className={styles.selectWrapper}>
            <select
              name="location"
              value={data.location}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={styles.select}
            >
              <option value="">Select Location</option>
              {countryList.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className={styles.customIcon}
            />
          </div>
          {/* {errors.location && touched.location && (
            <span>{errors.location}</span>
          )} */}
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
