import PuzzleArea from '../components/PuzzleArea';
import styles from '../styles/Puzzle.module.css';

const puzzle = () => {
  return (
    <div className={styles.container}>
      <PuzzleArea />
    </div>
  );
};

export default puzzle;