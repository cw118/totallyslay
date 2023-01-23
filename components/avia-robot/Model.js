import Script from 'next/script';

const Model = ({ model }) => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <model-viewer src={`/3d-models/${model}.glb`} ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="poster.webp" shadow-intensity="1">
      </model-viewer>
    </>
  );
}

export default Model;