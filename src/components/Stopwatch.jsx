import React, { useRef, useState } from "react";
import styles from "../styles/Day-2.module.css";

function Stopwatch() {
  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerOn) {
      setTimerOn(true);
      timerRef.current = setInterval(() => {
        setTimerTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (timerOn) {
      setTimerOn(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    if (timerOn) {
      setTimerOn(false);
      setTimerTime(0);
      clearInterval(timerRef.current);
    }
  };

  const seconds = Math.floor(timerTime / 1000) % 60;
  const minutes = Math.floor(timerTime / 60000) % 60;
  const hours = Math.floor(timerTime / 3600000);

  return (
    <div className={styles.answer}>
      <div className={styles.timer}>
        <p>
          {hours} : {minutes} : {seconds}
        </p>
        <p>Jam : Menit : Detik</p>
      </div>
      <div className={styles.control}>
        <button
          onClick={resetTimer}
          style={{ backgroundColor: "var(--mustard)" }}
        >
          Reset
        </button>
        <button
          onClick={startTimer}
          style={{ backgroundColor: "var(--mindaro)" }}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          style={{ backgroundColor: "var(--sgbus-green)" }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
