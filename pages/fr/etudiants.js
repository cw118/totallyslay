import Meta from '../../components/Meta';
import Cards from "../../components/agents-students/Cards"

export default function etudiants() {
  return (
    <>
      <Meta title='Étudiants | M.A.R.I.' description='Les étudiants de M.A.R.I.' />
      <Cards fr={true} />
    </>
  );
}