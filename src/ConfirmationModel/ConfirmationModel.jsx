// import Button from "../../Componants/Button/Button";
import { useNavigate } from "react-router-dom";
import "./ConfirmationModel.css";
import { useContext } from "react";

function ConfirmModel({ onClose, title, onSuccess, name }) {
  const navigate = useNavigate();
  // const { mode } = useContext(ModeContext);

  //   const confirmcancelBtn = (e) => {
  //     e.preventDefault();
  //     navigate("/");
  //   };
  return (
    <>
      <div className="confirm-background">
        <div className="confirm-position">
          <p>{title}</p>

          <div className="confirm-btn">
            <button className="confirm-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="confirm-logout-btn" onClick={onSuccess}>
              {name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmModel;
