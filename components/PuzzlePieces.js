import { motion } from 'framer-motion';
import styles from '../styles/Puzzle.module.css';

const PuzzlePieces = ({ constraintsRef }) => {
  return (
    <>
      <motion.div
        className={`${styles.piece} ` + `bottomLeft`}
        id={styles.pieceone}
        drag
        dragElastic={0.15}
        dragConstraints={constraintsRef}
        whileTap={{ opacity: 0.75 }}>
      </motion.div>
      <motion.div
        className={`${styles.piece} ` + `topLeft`}
        id={styles.piecetwo}
        drag
        dragElastic={0.15}
        dragConstraints={constraintsRef}
        whileTap={{ opacity: 0.75 }}>
      </motion.div>
      <motion.div
        className={`${styles.piece} ` + `topRight`}
        id={styles.piecethree}
        drag
        dragElastic={0.15}
        dragConstraints={constraintsRef}
        whileTap={{ opacity: 0.75 }}>
      </motion.div>
      <motion.div
        className={`${styles.piece} ` + `bottomRight`}
        id={styles.piecefour}
        drag
        dragElastic={0.15}
        dragConstraints={constraintsRef}
        whileTap={{ opacity: 0.75 }}>
      </motion.div>
    </>
  );
}

export default PuzzlePieces;
// {shuffledIds.map((id, index) => <PuzzlePiece key={`${index}`} position={`${shuffledPositions[index]}`} idName={`${id}`} constraintsRef={constraintsRef} />)}