import Puzzle from '../../components/Puzzle';
import SpyNav from '../../components/SpyNav';
import styles from '../../styles/Moohp.module.css';

const moohp = () => {
  return (
    <>
      <SpyNav />
      <div className={styles.container}>
        <Puzzle />
      </div>
    </>
  );
}

export default moohp;