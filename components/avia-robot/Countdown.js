import { useState, useEffect } from 'react';
import styles from '../../styles/Avia.module.css';
import classNames from 'classnames';

const Countdown = ({ fr }) => {
  const [diff, setDiff] = useState({});
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  
  const endDate = new Date('February 16, 2023 08:00:00') // start of AVIA :)
  const aviaEnd = new Date('February 18, 2023 19:00:00'); // end of AVIA :(

  const findDistance = () => {
    const startDate = new Date(); // get current date and time
    const distance = endDate - startDate;
    const endDistance = aviaEnd - startDate;

    if (distance > 0) {
      // calculate days, hours, minutes, seconds remaining
      setDiff({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    } else {
      if (endDistance < 0) {
        setEnded(true);
      } else {
        setStarted(true);
      }
    }
    
  }

  // find remaining time only on first render, update that time every second
  useEffect(() => {
    const i = setInterval(findDistance, 1000);
    return () => clearInterval(i);
  }, [])

  return (
    <>
      <div className={classNames(`${styles.countdown}`, { 'hide': started || ended })}>
        <span className={styles.timeContainer}><span className={styles.time}>{diff.days}</span> <span className={styles.unit}>{fr ? 'j ' : 'd '}</span></span>
        <span className={styles.timeContainer}><span className={styles.time}>{diff.hours}</span> <span className={styles.unit}>h</span></span>
        <span className={styles.timeContainer}><span className={styles.time}>{diff.minutes}</span> <span className={styles.unit}>min</span></span>
        <span className={`${styles.timeContainer} ${styles.noBorder}`}><span className={styles.time}>{diff.seconds}</span> <span className={styles.unit}>s</span></span>
      </div>
      {started && !ended ? <h3 className={styles.startMsg}>{fr ? 'AVIA a commencé!' : 'AVIA has begun!'}</h3> : null}
      {ended ? <h3 className={styles.endMsg}>{fr ? 'AVIA est terminé!' : 'AVIA has ended!'}</h3> : null}
    </>
  )
}

export default Countdown;