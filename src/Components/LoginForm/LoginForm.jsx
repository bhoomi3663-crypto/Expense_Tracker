import { useContext, useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/UserContext";
import { TOAST_MESSAGES } from "../../constants/appConstants";

function LoginForm() {
  const [error, setError] = useState();
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    uname: "",
    email: "test@gmail.com",
    pwd: "123456",
  });

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  console.log(loginData);

  const handleLoginForm = (e) => {
    e.preventDefault();
    if (loginData.uname.trim() === "") {
      toast.error("Please enter Username");
      return;
    }
    updateUser(loginData);
    toast.success(`${TOAST_MESSAGES.LOGIN_SUCCESS} ${loginData.uname}!`);
    navigate("/home");
  };

  const handleblur = (e) => {
    const { name, value } = e.target;
    let message = "";
    if (name == "uname") {
      if (!value.trim()) {
        message = "Username is required";
      }
    }
    setError({
      ...error,
      [name]: message,
    });
  };

  return (
    <>
      <div className="loginBackground">
        <form className="bg-posision" onSubmit={handleLoginForm}>
          <div className="loginLayer">
            <div className="loginHeading">
              <h1>LOGIN</h1>
            </div>
            <div className="loginInput">
              <label htmlFor="uname" className="loginInput">
                User Name:
                <input
                  type="uname"
                  id="uname"
                  name="uname"
                  autoComplete="off"
                  onChange={handleInputchange}
                  onBlur={handleblur}
                />
                {error && <p className="error-msg">{error.uname}</p>}
              </label>
              <label htmlFor="email" className="loginInput">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={"test@gmail.com"}
                readOnly
              />
            </div>
            <div className="loginInput">
              <label htmlFor="password" className="loginInput">
                Password:
              </label>
              <div>
                <input
                  className="pwd-input"
                  type="password"
                  id="pwd"
                  name="pwd"
                  value={"123456"}
                  readOnly
                />
              </div>
            </div>
            <div className="btn-footer">
              <Button label="Login" className="login-btn" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default LoginForm;
