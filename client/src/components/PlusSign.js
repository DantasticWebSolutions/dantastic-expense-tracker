import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import AddTransaction from "./AddTransaction";

export default function PlusSign() {
  const [isActive, setIsActive] = useState(false);
  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="plusSignContainer">
        <button onClick={openModal} className="exitButton">
          <Fab color="primary" aria-label="add" onclick={openModal}>
            <AddIcon />
          </Fab>
        </button>
      </div>
      <div className={`menu-container  ${isActive ? "active" : "inactive"}`}>
        <div className={`menu  ${isActive ? "active" : "inactive"}`}>
          <AddTransaction />
          <button onClick={openModal} className="exitButton">
            <ClearIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
}
