import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios";

const DocPage = () => {
  const [userName, setUserName] = useState("");
  const [script, setScript] = useState("");
  const [api, setApi] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          console.error("User ID or Token is undefined or null");
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = response.data;
        const { name } = userData;
        setUserName(name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchScript = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/generate_script"
        );
        setScript(response.data);
      } catch (error) {
        console.error("Error fetching script:", error);
      }
    };
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/generate_api"
        );
        setApi(response.data);
      } catch (error) {
        console.error("Error fetching api:", error);
      }
    };
    fetchUserData();
    fetchScript();
    fetchApi();
  }, []);

  return (
    <section className={styles.page}>
      <h1>
        Thank you {userName} <br></br> for buying our services!
        <br></br> You can now have the API & Script{" "}
      </h1>

      <div className={styles.tabs}>
        <div className={styles["tab-2"]}>
          <label htmlFor="tab2-1">Script</label>
          <input id="tab2-1" name="tabs-two" type="radio" defaultChecked />
          <div>
            <h4>Script</h4>
            <pre>{script}</pre>
          </div>
        </div>
        <div className={styles["tab-2"]}>
          <label htmlFor="tab2-2">API</label>
          <input id="tab2-2" name="tabs-two" type="radio" />
          <div>
            <h4>API</h4>
            <p>{api}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocPage;
