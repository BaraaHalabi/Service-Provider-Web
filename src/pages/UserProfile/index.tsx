import React, { useState, useEffect } from "react";
import "./style.css";
import pic from "../../img/analytics.png";
import axios from "axios";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  interface Service {
    service_name: string;
    usage: number;
    expiry_date: string;
    created_at?: string;
  }
  const [services, setServices] = useState<Service[]>([]);

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
        const { name, email } = userData;

        setUserName(name);
        setEmail(email);
        setCountry("Syria");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchUserServices = async () => {
      try {
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://127.0.0.1:8000/api/user_services?user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching user services:", error);
      }
    };

    fetchUserData();
    fetchUserServices();
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
            <div className={`tab ${activeTab === 0 ? "active" : ""}`}>
              <div className="personal-info">
                <h2>Personal Info</h2>
                <p>
                  <strong>Username:</strong> {userName}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Country:</strong> {country}
                </p>
              </div>
            </div>
            <div className={`tab ${activeTab === 1 ? "active" : ""}`}>
              <h2>Services</h2>
              <table className="services-table">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Usage</th>
                    <th>Expiry Date</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index}>
                      <td>{service.service_name}</td>
                      <td>{service.usage}</td>
                      <td>
                        {service.expiry_date === "0000-00-00"
                          ? "-"
                          : service.expiry_date}
                      </td>
                      <td>
                        {service.created_at
                          ? new Date(service.created_at).toLocaleDateString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`tab ${activeTab === 2 ? "active" : ""}`}>
              {/* Settings content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
