import React, { useState } from "react";
import "./style.css";
import pic from "../../img/analytics.png";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);

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
          <h3 className="user-name">Leee Bassam</h3>
          <div className="address">
            <p id="state" className="state">
              Syria, AL-tall.
            </p>
          </div>
        </div>
      </div>

      <div className="main-bd">
        {/* <div className="left-side">
          <div className="profile-side">
            <p className="mobile-no">
              <i className="fa fa-phone"></i>+963 940371512
            </p>
            <p className="user-mail">
              <i className="fa fa-envelope"></i> leem199xx@gmail.com
            </p>
          </div> */}
        {/* </div> */}

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
