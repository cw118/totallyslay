import Meta from '../components/Meta';
import Post from '../components/journal/Post.js';

export default function journal() {
  return (
    <>
      <Meta title='Journal | M.A.R.I.' description="The M.A.R.I. journal" />
      <Post />
    </>
  );
}