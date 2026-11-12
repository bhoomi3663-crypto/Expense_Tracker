import { useContext } from "react";
import "./Navbar.css";
import { Wallet, Home, PlusCircle, Receipt } from "lucide-react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Wallet size={28} />
        <h2>Expense Tracker</h2>
      </div>

      <div className="navbar-links">
        <NavLink to="/home" className="nav-link active">
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
      </div>
      <NavLink to="/userProfileEdit" className="loginuser-name">
        Hello, {user?.uname || "User"} !
      </NavLink>
      <Button className="logout-button" label="Logout" />
    </nav>
  );
};

export default Navbar;
