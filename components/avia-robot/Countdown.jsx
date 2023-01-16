import { useState, useEffect } from 'react';
import styles from '../../styles/Avia.module.css';

const Countdown = ({ fr }) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  
  const endDate = new Date('February 16, 2023 08:00:00 ') // start of AVIA :)

  const findDistance = () => {
    const startDate = new Date(); // get current date and time
    const distance = endDate - startDate;

    // calculate days, hours, minutes, seconds remaining
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSec(Math.floor((distance % (1000 * 60)) / 1000));
  }

  // find remaining time only on first render, update that time every second
  useEffect(() => {
    const i = setInterval(findDistance, 1000);
    return () => clearInterval(i);
  }, [])

  return (
    <div className={styles.countdown}>
      <span className={styles.timeContainer}><span className={styles.time}>{day}</span> <span className={styles.unit}>{fr ? 'j ' : 'd '}</span></span>
      <span className={styles.timeContainer}><span className={styles.time}>{hour}</span> <span className={styles.unit}>h</span></span>
      <span className={styles.timeContainer}><span className={styles.time}>{min}</span> <span className={styles.unit}>min</span></span>
      <span className={`${styles.timeContainer} ${styles.noBorder}`}><span className={styles.time}>{sec}</span> <span className={styles.unit}>s</span></span>
    </div>
  )
}

export default Countdown;