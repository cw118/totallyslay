import Meta from '../../../components/Meta';
import Archive from "../../../components/journal/Archive.js"

export default function archives() {
  return (
    <>
      <Meta title='Archives | MOOHP' description='Les archives de MOOHP' />
      <Archive fr={true} />
    </>
  );
}