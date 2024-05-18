// import React, { useState } from "react";
// import "./style.css";
// const UserProfile = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [bioVisible, setBioVisible] = useState(false);
//   const [bioOldText, setBioOldText] = useState("");
//   const [bioContent, setBioContent] = useState(
//     "Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!"
//   );

//   const toggleBioVisibility = () => {
//     setBioVisible(!bioVisible);
//     setBioOldText(bioContent);
//   };

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className="container">
//       {/* Profile Header */}
//       <div className="profile-header">
//         {/* Profile Image */}
//         <div className="profile-img">
//           <img src="./bg.jpg" width="200" alt="Profile" />
//         </div>
//         {/* User Name and Address */}
//         <div className="profile-nav-info">
//           <h3 className="user-name">Bright Code</h3>
//           <div className="address">
//             <p id="state" className="state">
//               New York,
//             </p>
//             <span id="country" className="country">
//               USA.
//             </span>
//           </div>
//         </div>
//         {/* Notification */}
//         <div className="profile-option">
//           <div className="notification">
//             <i className="fa fa-bell"></i>
//             <span className="alert-message">3</span>
//           </div>
//         </div>
//       </div>
//       {/* Main Body */}
//       <div className="main-bd">
//         {/* Left Side */}
//         <div className="left-side">
//           {/* Profile Side */}
//           <div className="profile-side">
//             {/* Mobile Number and Email */}
//             <p className="mobile-no">
//               <i className="fa fa-phone"></i> +23470xxxxx700
//             </p>
//             <p className="user-mail">
//               <i className="fa fa-envelope"></i> Brightisaac80@gmail.com
//             </p>
//             {/* User Bio */}
//             <div className="user-bio">
//               <h3>Bio</h3>
//               <p className="bio">{bioVisible ? bioOldText : bioContent}</p>
//             </div>
//             {/* Profile Buttons */}
//             <div className="profile-btn">
//               <button className="chatbtn" id="chatBtn">
//                 <i className="fa fa-comment"></i> Chat
//               </button>
//               <button className="createbtn" id="Create-post">
//                 <i className="fa fa-plus"></i> Create
//               </button>
//             </div>
//             {/* User Rating */}
//             <div className="user-rating">
//               <h3 className="rating">4.5</h3>
//               <div className="rate">
//                 <div className="star-outer">
//                   <div className="star-inner">
//                     <i className="fa fa-star"></i>
//                     <i className="fa fa-star"></i>
//                     <i className="fa fa-star"></i>
//                     <i className="fa fa-star"></i>
//                     <i className="fa fa-star"></i>
//                   </div>
//                 </div>
//                 <span className="no-of-user-rate">
//                   <span>123</span>&nbsp;&nbsp;reviews
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Side */}
//         <div className="right-side">
//           {/* Navigation */}
//           <div className="nav">
//             <ul>
//               <li
//                 onClick={() => handleTabClick(0)}
//                 className={activeTab === 0 ? "active" : ""}
//               >
//                 Posts
//               </li>
//               <li
//                 onClick={() => handleTabClick(1)}
//                 className={activeTab === 1 ? "active" : ""}
//               >
//                 Reviews
//               </li>
//               <li
//                 onClick={() => handleTabClick(2)}
//                 className={activeTab === 2 ? "active" : ""}
//               >
//                 Settings
//               </li>
//             </ul>
//           </div>
//           {/* Profile Body */}
//           <div className={`profile-body`}>
//             {/* Tabs */}
//             <div
//               className={`profile-posts tab ${activeTab === 0 ? "active" : ""}`}
//             >
//               {" "}
//               {/* Content for Posts */}{" "}
//             </div>
//             <div
//               className={`profile-reviews tab ${
//                 activeTab === 1 ? "active" : ""
//               }`}
//             >
//               {" "}
//               {/* Content for Reviews */}{" "}
//             </div>
//             <div
//               className={`profile-settings tab ${
//                 activeTab === 2 ? "active" : ""
//               }`}
//             >
//               {" "}
//               {/* Content for Settings */}{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
