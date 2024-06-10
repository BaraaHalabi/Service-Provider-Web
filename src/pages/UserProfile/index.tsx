import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pic from "../../img/userDefaultImage.png";
import CountryList from "../../components/Countries/CountryComponent";

interface Service {
  service_name: string;
  usage: number;
  expiry_date: string;
  created_at?: string;
}

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);

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
        const { name, email, location } = userData;

        setUserName(name);
        setEmail(email);
        setLocation(location);
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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userID");
      const token = localStorage.getItem("token");

      const userData = {
        name: userName,
        email: email,
        password: password,
        location: location,
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/api/user_update/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("User is updated successfully");
      } else {
        toast.error("An error occurred.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update user.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={pic} width="200" alt="Profile" />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">{userName}</h3>
          <div className="address">{location}</div>
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
                  <strong>Location:</strong> {location}
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
              <h2>Settings</h2>
              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <CountryList
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="glowing-btn">
                  <span className="glowing-txt">
                    UP<span className="faulty-letter">DA</span>TE
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UserProfile;
