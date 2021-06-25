import React, { useState, useEffect } from "react";
import Styles from "./MainPage.module.css";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPoints } from "../../redux/actions";
import { createTime } from "../../redux/actions";
import { useSelector } from "react-redux";

const MainPage = () => {
  const user = useSelector((state) => state);
  const COUNT = user.game[user.game.length - 1].grid;
  const oneCard = 3.75;
  const timeNumber = oneCard * (COUNT * COUNT);
  const history = useHistory();
  const [time, setTime] = useState(Math.round(timeNumber));
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);
  const [points, setPoints] = useState(0);
  const [ckeckCard, setCkeckCard] = useState([]);
  const [dataForRender, setDataForRender] = useState([]);
  const dispatch = useDispatch();
  const timeCount = () => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
    if (time <= 0) {
      dispatch(createPoints(points));
      dispatch(createTime(Math.round(timeNumber) - time));
      history.push("/finish");
    }
  };
  const gridSize = () => {
    if (COUNT === 4) {
      return Styles.blockCards4;
    } else if (COUNT === 6) {
      return Styles.blockCards6;
    } else if (COUNT === 8) {
      return Styles.blockCards8;
    }
  };
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    let start = (COUNT * COUNT) / 2;
    let arrForRender1 = [];
    let arrForRender2 = [];
    while (start >= 1) {
      arrForRender1.push(start--);
      arrForRender2.push(start--);
    }
    const finishArr = arrForRender1.concat(arrForRender2);
    const finishArr2 = finishArr.concat(finishArr);
    setDataForRender(shuffle(finishArr2));
  }, [COUNT]);

  useEffect(() => {
    if (values[0] && values[1] && values[0] === values[1]) {
      setPoints(points + 1);
      setValues([]);
    } else if (values[0] && values[1] && values[0] !== values[1]) {
      setValues([]);
    }
  }, [values]);

  useEffect(() => {
    if (points >= (COUNT * COUNT) / 2) {
      dispatch(createPoints(points));
      dispatch(createTime(Math.round(timeNumber) - time));
      history.push("/finish");
    }
  }, [points]);

  useEffect(() => {
    timeCount();
  }, [time]);

  return (
    <div className={Styles.container}>
      <div className={Styles.contentBlock}>
        <div className={gridSize()}>
          {dataForRender &&
            dataForRender.length > 0 &&
            dataForRender.map((el) => {
              return (
                <Card
                  setCount={setCount}
                  count={count}
                  el={el}
                  values={values}
                  setValues={setValues}
                  setCkeckCard={setCkeckCard}
                  ckeckCard={ckeckCard}
                />
              );
            })}
        </div>
        <div className={Styles.timer}>
          {time}
          <div className={Styles.pointsBlock}>
            <h4>Счёт: {points}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
