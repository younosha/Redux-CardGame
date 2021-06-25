import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Styles from "./FinishPage.module.css";
import { useHistory } from "react-router-dom";

const FinishPage = () => {
  const user = useSelector((state) => state);
  const history = useHistory();
  const startGame = () => {
    history.push("/");
  };
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.gameOver}>
          <h1>Game over</h1>
        </div>
        <div className={Styles.players}>
          {user.game.map((item) => {
            return (
              <div className={Styles.player}>
                <h3>Name: {item.name}</h3>
                <h3>
                  Grid: {item.grid}x{item.grid}
                </h3>
                <h3>Points: {item.points}</h3>
                <h3>Time: {item.time}</h3>
              </div>
            );
          })}
        </div>
        <div className={Styles.btnStartOver}>
          <Button variant="contained" color="primary" onClick={startGame}>
            START OVER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
