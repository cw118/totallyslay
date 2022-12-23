import { useRef } from 'react';
import styles from '../styles/Puzzle.module.css';
import { motion } from 'framer-motion';
import PuzzlePieces from './PuzzlePieces';

const PuzzleArea = () => {
  const constraintsRef = useRef(null);

  return (
    <div className={styles.piecesContainer}>
      <motion.div className={styles.area} ref={constraintsRef}>
        <div className={styles.quadrant} id={styles.one}></div>
        <div className={styles.quadrant} id={styles.two}></div>
        <div className={styles.quadrant} id={styles.three}></div>
        <div className={styles.quadrant} id={styles.four}></div>
      </motion.div>
      <PuzzlePieces constraintsRef={constraintsRef} />
    </div>
  )
}

export default PuzzleArea;