import React, { useState, useEffect } from "react";
import "./style.css";
import pic from "../../img/analytics.png";
import axios from "axios";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("token");

        if (!userId) {
          console.error("User ID is undefined or null");
          return;
        }

        if (!token) {
          console.error("Token is undefined or null");
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

    fetchUserData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={pic} width="200" alt="Profile" />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">{userName}</h3>
          <div className="address">
            <p id="state" className="state">
              Syria, AL-tall.
            </p>
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="right-side">
          <div className="nav">
            <ul>
              <li
                onClick={() => handleTabClick(0)}
                className={activeTab === 0 ? "active" : ""}
              >
                Personal Info
              </li>
              <li
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Services
              </li>
              <li
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "active" : ""}
              >
                Settings
              </li>
            </ul>
          </div>
          <div className="profile-body">
            <div className={`tab ${activeTab === 0 ? "active" : ""}`}> </div>
            <div className={`tab ${activeTab === 1 ? "active" : ""}`}> </div>
            <div className={`tab ${activeTab === 2 ? "active" : ""}`}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
