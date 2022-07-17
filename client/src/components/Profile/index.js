import React, { useState } from "react";
import Auth from "../../utils/auth";
import "./Profile.css";


function ProfilePage() {
  const user = Auth.getProfile();
  const { username, email, _id, profilePic } = user.data;

  console.log(profilePic);

  const [userName, setname] = useState(username);
  const [userEmail, setUserEmail] = useState(email);

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <img
            className="profile-image"
              ref={uploadedImage}
              alt=""
              height="100px"
              width="100px"
              onClick={() => imageUploader.current.click()}
            />
          </div>
        </div>
        <div className="lower-container">
          <h3>{userName}</h3>
          <h3 className="email"> {userEmail} </h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            multiple="false"
            style={{
              display: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
