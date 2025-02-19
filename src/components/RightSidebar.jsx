import assets from "../assets/assets";
import { logout } from "../config/firebase";
import "./rightsidebar.css";
import { auth } from "../config/firebase";

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Name <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey, I am Name using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic5} alt="" />
          <img src={assets.pic6} alt="" />
        </div>
      </div>

      <button
        onClick={() => {
          console.log(auth);
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default RightSidebar;
