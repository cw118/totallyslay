// import styles from '../styles/<>.module.css';
// add id={styles.gamePiece} to <model-viewer> once the CSS module stylesheet is linked
import Script from 'next/script';

const GamePiece = () => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <model-viewer src="/3d-models/game_piece.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
      </model-viewer>
    </>
  );
}

export default GamePiece;