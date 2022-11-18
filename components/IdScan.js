import { useState } from 'react';
import styles from '../styles/Scantest.module.css';

const IdScan = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const playScan = () => {
    setMouseDown(true);
  }

  const pauseScan = () => {
    setMouseDown(false);
  }

  const validate = () => {
    setScanComplete(true);
  }

  return (
    <div className={styles.container} onMouseDown={playScan} onTouchStart={playScan} onMouseUp={pauseScan} onTouchEnd={pauseScan}>
      <div className={styles.idScan}>
        <div className={styles.scanCursor}></div>
        <div className={styles.fingerprint}>
          <div className={styles.printUnverified + (scanComplete ? `${styles.hide}` : '')}></div>
          <div className={styles.printVerified} id={scanComplete ? `` : (styles.scanPaused + (mouseDown ? `${styles.scan}` : ''))} onAnimationEnd={validate}></div>
        </div>
        <div className={styles.idCard}>
          <div className={styles.cardUnverified}></div>
          <div className={styles.cardVerified} id={scanComplete ? `` : (styles.scanPaused + (mouseDown ? `${styles.scan}` : ''))} onAnimationEnd={validate}></div>
        </div>
      </div>
    </div>
  )
}

export default IdScan;