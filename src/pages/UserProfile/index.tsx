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
  const [newLocation, setNewLocation] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(pic);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          console.error("User ID or Token is undefined or null");
          return;
        }

        const userRequest = axios.get(
          `http://127.0.0.1:8000/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const servicesRequest = axios.get(
          `http://127.0.0.1:8000/api/user_services?user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const [userResponse, servicesResponse] = await Promise.all([
          userRequest,
          servicesRequest,
        ]);

        const userData = userResponse.data;
        const { name, email, location } = userData;

        setUserName(name);
        setEmail(email);
        setLocation(location);
        setNewLocation(location);
        setServices(servicesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
        location: newLocation,
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
        setLocation(newLocation); // Update the displayed location only on successful update
      } else {
        toast.error("An error occurred.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update user.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async () => {
    if (!profileImage) {
      toast.error("No image selected.");
      return;
    }

    try {
      const userId = localStorage.getItem("userID");
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("profile_image", profileImage);

      const response = await axios.post(
        `http://127.0.0.1:8000/api/user_update_image/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile image updated successfully");
      } else {
        toast.error("Failed to update profile image.");
      }
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast.error("Failed to upload image.");
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={imagePreview} width="200" alt="Profile" />
          {/* <input type="file" id="imageUpload" onChange={handleImageChange} /> */}
          {/* <label htmlFor="imageUpload">+</label> */}
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
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
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
