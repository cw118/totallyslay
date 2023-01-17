import Script from 'next/script';
import styles from '../../styles/Robot.module.css';

const RobotArm = ({ fr }) => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <model-viewer src="/3d-models/arm-1.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
      </model-viewer>
      <h3 className={styles.label}>{fr ? 'Bras 1' : 'Arm 1'}</h3>
    </>
  );
}

export default RobotArm;