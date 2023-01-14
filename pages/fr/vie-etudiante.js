import Meta from '../../components/Meta';
import Post from "../../components/journal/Post";
import styles from "../../styles/Post.module.css";

export default function vieEtudiante() {
  return (
    <>
      <Meta title='Vie étudiante | M.A.R.I.' description='Vie étudiante à M.A.R.I.' />
      <h1 className={styles.header}>Vie étudiante</h1>
      <Post />
    </>
  );
}