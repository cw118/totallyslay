import Meta from '../../../components/Meta';
import Robot from '../../../components/avia-robot/Robot';

export default function frRobot() {
  return (
    <>
      <Meta title='Robot | MOOHP' description='Le robot de MOOHP' />
      <Robot fr={true} />
    </>
  );
}