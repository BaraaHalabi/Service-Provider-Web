import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios";

const DocPage = () => {
  const [userName, setUserName] = useState("");
  const [script, setScript] = useState("");
  const [api, setApi] = useState("");
  const userId = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
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
          "http://127.0.0.1:8000/api/generate_script",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setScript(response.data);
      } catch (error) {
        console.error("Error fetching script:", error);
      }
    };
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/generate_api",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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
        <ul>
          <li
            onClick={() => setActiveTab(0)}
            className={activeTab === 0 ? styles.active : ""}
          >
            Script
          </li>
          <li
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? styles.active : ""}
          >
            API
          </li>
        </ul>
        <div className={styles.tabContent}>
          {activeTab === 0 && (
            <div>
              <h4>scrrrippttto </h4>
              {/* <p>{script}</p> */}
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h4>Apiiioo </h4>
              <p>{api}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocPage;
