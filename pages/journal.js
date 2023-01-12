import Meta from '../components/Meta';
import Post from '../components/journal/Post.js';
import styles from "../styles/Post.module.css";

export default function journal() {
  return (
    <>
      <Meta title='Journal | M.A.R.I.' description="The M.A.R.I. journal" />
      <h1 className={styles.header}>Journal</h1>
      <Post />
    </>
  );
}