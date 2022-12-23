import styles from '../styles/Scantest.module.css';
import { motion as m } from 'framer-motion';

const IdScan = () => {

  return (
    <div className={styles.container}>
      <m.div className={styles.idUnverified} initial={{ animationPlayState: 'paused' }} whileTap={{ animationPlayState: 'running' }}>
        <m.div className={styles.scanCursor}></m.div>
      </m.div>
    </div>
  )
}

export default IdScan;