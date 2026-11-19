import "./UserProfileEdit.css";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/UserContext";
import ThemeContext from "../../Context/ThemeContext";
import { TOAST_MESSAGES } from "../../constants/appConstants";

const UserProfileEdit = () => {
  const { user, updateUser } = useContext(UserContext);
  const { mode } = useContext(ThemeContext);

  const [editloginData, setEditLoginData] = useState({
    uname: user.uname,
    email: user.email,
    pwd: user.pwd,
  });
  const navigate = useNavigate();

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setEditLoginData({ ...editloginData, [name]: value });
  };
  console.log(editloginData);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    updateUser(editloginData);
    navigate("/home");
    toast.success(
      `Hello, ${editloginData.uname}! ${TOAST_MESSAGES.USERPROFILE_EDITED}`,
    );
  };

  return (
    <div className={`profile-container ${mode}`}>
      <div className={`profile-card ${mode}`}>
        <div className="profile-header">
          <div className="profile-icon">👤</div>
          <h2>Edit Profile</h2>
          <p>Update your personal information</p>
        </div>

        <form className="profile-form" onSubmit={handleProfileUpdate}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="uname"
              id="uname"
              value={editloginData.uname}
              onChange={handleInputchange}
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={editloginData.email}
              onChange={handleInputchange}
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={editloginData.pwd}
              onChange={handleInputchange}
              autoComplete="off"
            />
          </div>
          <div className="profile-btn">
            <Button
              type="button"
              className="cancel-btn"
              label="Cancel"
              onClick={() => navigate("/home")}
            />
            <Button className="update-btn" label="Update Profile" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;
