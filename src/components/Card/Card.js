import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import Styles from "./Card.module.css";

export default function Card({
  count,
  setCount,
  el,
  values,
  setValues,
  ckeckCard,
  setCkeckCard,
}) {
  const [flipped, setFlipped] = useState(false);
  const [value, setValue] = useState(el);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const mainFunc2 = () => {
    setFlipped(false);
    setCount(0);
  };

  const mainFunc = () => {
    if (count !== 2) {
      setFlipped(true);
      setCount(count + 1);
      setValues([...values, el]);
    }
  };

  useEffect(() => {
    const check = count >= 2 && values[0] && values[1];
    if (check && values[0] !== values[1] && !(ckeckCard.indexOf(el) != -1)) {
      setTimeout(mainFunc2, 700);
    } else if (check && values[0] === values[1]) {
      setCount(0);
      setCkeckCard([...ckeckCard, values[0]]);
    }
  }, [count]);

  return (
    <div onClick={mainFunc} className={Styles.cardBlock}>
      <a.div
        className={`${Styles.c} ${Styles.back}`}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <button className={Styles.btn1}></button>
      </a.div>
      <a.div
        className={`${Styles.c} ${Styles.front}`}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <button className={Styles.btn2}>{value}</button>
      </a.div>
    </div>
  );
}
