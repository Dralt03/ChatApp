import { useState } from "react";
import assets from "../../assets/assets";
import "./profile.css";
const Profile = () => {
  const [img, setImage] = useState(false);
  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={img ? URL.createObjectURL(img) : assets.avatar_icon}
              alt=""
            />
            Upload Profile Image
          </label>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Write Profile Bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-pic"
          src={img ? URL.createObjectURL(img) : assets.logo_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
