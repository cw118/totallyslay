import Meta from '../../../components/Meta';
import Agents from "../../../components/agents-students/Agents"

export default function frAgents() {
  return (
    <>
      <Meta title='Agents | MOOHP' description='Les agents de MOOHP' />
      <Agents fr={true} />
    </>
  );
}