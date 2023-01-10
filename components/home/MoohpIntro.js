import styles from '../../styles/Moohp.module.css';

const MoohpIntro = ({ fr }) => {
  return (
    <div className={styles.intro}>
      <h3>{fr ? 'Bienvenue à MOOHP, Agent' : 'Welcome to MOOHP, Agent'} <span className={styles.inputName} contentEditable autoCorrect='false' suppressContentEditableWarning> {fr ? 'saisissez votre nom' : 'type your name'} </span> !</h3><br />
      <p>{fr ? 'Ici, chez l\'organisation Marianopolis pour la protection des humains, nos espions (également des étudiants à temps plein à M.A.R.I.) travaillent sans relâche pour protéger le monde. L\'équipe, dirigée par l\'agent exécutif Paradis et menée par les agents en chef Abou-Haidar et Patel, est divisée en cinq départements' : 'Here at the Marianopolis Organisation of Human Protection, our double agents work tirelessly to keep the world safe. The team, managed by executive agent Paradis and led by head agents Abou-Haidar and Patel, is divided into the five following departments'}:</p>
      <ul>
        <li><strong>{fr ? 'Machinerie' : 'Machinery'}</strong>, {fr ? 'pour nos formidables constructeurs de robot' : 'for our totally awesome robot builders'}</li>
        <li><strong>{fr ? 'Réseau virtuel' : 'Virtual Network'}</strong>, {fr ? 'qui gère nos sites web (comme celui-ci)' : 'which keeps our websites (like this one) running'}</li>
        <li><strong>{fr ? 'Piratage informatique' : 'Hacking'}</strong>, {fr ? 'où nos programmeurs écrivent du code afin de résoudre des problèmes (de façon éthique!)' : 'where our programmers solve problems (ethically!) with code'}</li>
        <li><strong>{fr ? 'Production' : 'Manufacturing/Production'}</strong>, {fr ? 'composé d\'experts en construction de kiosque' : 'composed of kiosk construction experts'}</li>
        <li><strong>{fr ? 'Marketing' : 'Marketing'}</strong>, {fr ? 'pour nos réalisateurs et producteurs vidéo' : 'for our video directors and producers'}</li>
      </ul>
    </div>
  );
}

export default MoohpIntro;