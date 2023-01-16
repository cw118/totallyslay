import Meta from '../components/Meta';
import Post from '../components/journal/Post.js';
import styles from "../styles/Post.module.css";

export default function studentLife() {
  return (
    <>
      <Meta title='Student Life | M.A.R.I.' description="M.A.R.I. student life" />
      <h1 className={styles.header}>Student Life <img className={styles.sticker} src="/journal/sticker.svg" alt="Star" /></h1>
      <Post />
    </>
  );
}