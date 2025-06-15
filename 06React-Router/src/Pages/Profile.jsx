// src/pages/Profile.jsx
// src/pages/Profile.jsx
import React from "react";

function Profile(){
  // Ideally, you’d fetch this data from your backend or context
  const user = {
    name: "Rounak Khanam",
    email: "rounakkhanam06@example.com",
    profilePicture: "https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg",
    bio: "Full Stack Developer | React | Node | Express | MongoDB",
  };

  return (
    <div className="profile-page">
      <img src={user.profilePicture} alt={`${user.name}`} className="profile-pic" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.bio}</p>

      <h2>About Me</h2>
      <ul>
        <li>Developer with a passion for coding</li>
        <li>Always eager to learn new technologies</li>
        <li>Dreams to contribute to big, impactful projects</li>
      </ul>

      {/* You can add more details here, 
      like user's photos, friends, comments, or messages */}
    </div>
  )
}

export default Profile;


