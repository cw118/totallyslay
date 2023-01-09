import styles from '../../styles/Moohp.module.css';

export const MoohpIntro = () => {
  return (
    <div className={styles.intro}>
      <h3>Welcome to MOOHP, Agent <span className={styles.inputName} contentEditable autoCorrect={false}> type your name </span> !</h3><br />
      <p>Here at the Marianopolis Organisation of Human Protection, our double agents work tirelessly to keep the world safe. The team, managed by executive agent Paradis and led by head agents Abou-Haidar and Patel, is divided into the five following departments:</p>
      <ul>
        <li><strong>Machinery</strong>, for our totally awesome robot builders</li>
        <li><strong>Virtual Network</strong>, which keeps our websites (like this one) running</li>
        <li><strong>Hacking</strong>, where our programmers solve problems (ethically!) with code</li>
        <li><strong>Manufacturing/Production</strong>, composed of kiosk construction experts</li>
        <li><strong>Marketing</strong>, for our video directors and producers</li>
      </ul>
    </div>
  );
}

export const MoohpIntroFr = () => {
  return (
    <div className={styles.intro}>
      <h3>Bienvenue à MOOHP, Agent <span className={styles.inputName} contentEditable autoCorrect={false}> saisissez votre nom </span> !</h3><br />
      <p>Ici, chez l&apos;organisation Marianopolis pour la protection des humains, nos espions (également des étudiants à temps plein à M.A.R.I.) travaillent sans relâche pour protéger le monde. L&apos;équipe, dirigée par l&apos;agent exécutif Paradis et menée par les agents en chef Abou-Haidar et Patel, est divisée en cinq départements:</p>
      <ul>
        <li><strong>Machinerie</strong>, pour nos formidables constructeurs de robot</li>
        <li><strong>Réseau virtuel</strong>, qui gère nos sites web (comme celui-ci)</li>
        <li><strong>Piratage informatique</strong>, où nos programmeurs écrivent du code afin de résoudre des problèmes (de façon éthique!)</li>
        <li><strong>Production</strong>, composé d&apos;experts en construction de kiosque</li>
        <li><strong>Marketing</strong>, pour nos réalisateurs et producteurs vidéo</li>
      </ul>
    </div>
  );
}
