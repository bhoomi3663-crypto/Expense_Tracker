import { useContext } from "react";
import "./Navbar.css";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Wallet, Home, PlusCircle, Receipt } from "lucide-react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import ThemeContext from "../../Context/ThemeContext";
import { useState } from "react";
import ConfirmModel from "../../ConfirmationModel/ConfirmationModel";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const { mode, toggleTheme } = useContext(ThemeContext);
  console.log(mode);
  const handleClose = () => {
    setShowModel(false);
  };
  const confirmLogOutBtn = (e) => {
    e.preventDefault();
    localStorage.removeItem("LoginUser");
    navigate("/loginForm");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Wallet size={28} />
          <h2>Expense Tracker</h2>
        </div>

        <div className="navbar-links">
          <NavLink to="/home" className="nav-link">
            <Home size={20} />
            Home
          </NavLink>

          <NavLink to="/addExpense" className="nav-link">
            <PlusCircle size={20} />
            Add Expense
          </NavLink>

          <NavLink to="/expenseItems" className="nav-link">
            <Receipt size={20} />
            Expense Items
          </NavLink>
          <NavLink to="/myBarChart" className="nav-link">
            <Receipt size={20} />
            Bar Chart
          </NavLink>
        </div>
        <div className="theme-profile-btn">
          <div className="cloud-icon" onClick={toggleTheme}>
            {mode === "dark" ? (
              <span>
                <BsFillMoonStarsFill size={20} />
              </span>
            ) : (
              <span>
                <BsFillCloudSunFill size={20} />
              </span>
            )}
          </div>
          <div className="username-icon">
            <CgProfile className="user-icon" size={30} />
            <NavLink to="/userProfileEdit" className="loginuser-name">
              Hello, {user?.uname || "User"} !
            </NavLink>
          </div>

          <Button
            className="logout-button"
            label="Logout"
            onClick={() => setShowModel(true)}
          />
        </div>
      </nav>
      {showModel && (
        <ConfirmModel
          title="Are Want To Logout ?"
          onClose={handleClose}
          onSuccess={confirmLogOutBtn}
          name={"Logout"}
        />
      )}
    </>
  );
};

export default Navbar;
