import Script from 'next/script';
import styles from '../../styles/Robot.module.css';

const RobotArmTwo = ({ fr }) => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <model-viewer src="/3d-models/arm-2.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
      </model-viewer>
      <h3 className={styles.label}>{fr ? 'Bras 2' : 'Arm 2'}</h3>
    </>
  );
}

export default RobotArmTwo;