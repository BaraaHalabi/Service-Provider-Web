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
} from "@fortawesome/free-solid-svg-icons";
import countryList from "../components/Countries/Countrylist";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post("http://127.0.0.1:8000/api/register", formData)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          const { token, user } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", user.id);
          notify("You signed up successfully", "success");
          setIsLoggedIn(true);
          navigate("/");
        } else {
          notify("An error occurred.", "error");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        notify("Sign up failed.", "error");
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

        <div className={styles.formRow}>{/* Profile image code */}</div>
        <div className={styles.inputWithIcon}>
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
        </div>

        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
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
