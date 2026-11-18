import "./ConfirmationModel.css";
import { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import ThemeContext from "../Context/ThemeContext";

function ConfirmModel({ onClose, title, onSuccess, name }) {
  const { mode } = useContext(ThemeContext);

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="confirmation-dialog-title"
      className={`confirm-dialog ${mode}`}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button className="confirm-cancel" onClick={onClose} autoFocus>
          Cancel
        </Button>
        <Button className="confirm-action" onClick={onSuccess}>
          {name}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmModel;
