import Typewriter from 'typewriter-effect';

const pageTexts = {
  'avia': 'Your Mission: AVIA 2023',
  'aviaFr': 'Votre mission: AVIA 2023',
  'agents': 'Agents',
  'archives': 'MOOHP Archives',
  'archivesFr': 'Archives MOOHP',
  'robot': 'Robot',
}

const Typewrite = ({ page }) => {
  return <Typewriter
    onInit={(typewriter) => {
      typewriter.changeDelay(95)
                .typeString(`${pageTexts[page]}`)
                .start();
      }}
    />
}

export default Typewrite;