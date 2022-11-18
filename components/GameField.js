// import styles from '../styles/<>.module.css';

const GameField = () => {
  return (
    <>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      <model-viewer id={styles.playingField} src="avia-23-playing-field.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
        <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
        </div>
        </model-viewer>
    </>
  )
}

export default GameField;