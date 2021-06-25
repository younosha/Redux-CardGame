import React, { useState } from "react";
import Styles from "./StartPage.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { createName } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import ConfirmPopup from "../ConfirmPopup/ConfirmPopup";


const StartPage = () => {
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const startGame = () => {
    dispatch(createName(name));
    setName("");
    setConfirm(false);
  };

  const checkConfirm = () => {
    history.push("/main");
  };
  return (
    <div>
      {confirm ? (
        <div className={Styles.container}>
          <div className={Styles.block}>
            <div className={Styles.contentBlock}>
              <div className={Styles.interface}>
                <h1 className={Styles.title}>Enter your name:</h1>
                <TextField
                  id="outlined-basic"
                  label="Name..."
                  variant="outlined"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className={Styles.btnStartBlock}>
                <Button variant="contained" color="primary" onClick={startGame}>
                  START
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ConfirmPopup checkConfirm={checkConfirm} />
      )}
    </div>
  );
};

export default StartPage;
