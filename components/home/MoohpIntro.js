import { useState, useRef, useContext } from 'react';
import AppContext from '../AppContext';
import styles from '../../styles/Moohp.module.css';
import Typewrite from '../Typewrite';
import { Button } from 'flowbite-react';
import useSessionStorage from '../Storage';
import classNames from 'classnames';

const MoohpIntro = ({ fr, revealed }) => {
  const [tempName, setTempName] = useState(''); // temporary name, updates on detected changes in input box
  const [agentName, setAgentName] = useContext(AppContext); // final submitted name saved "globally" in AppContext and sessionStorage
  const [inputWarn, setInputWarn] = useState(false); // warn user that they must type a name to be able to submit
  const [hideInitial, setHideInitial] = useSessionStorage('hideInitial', false); // save to sessionStorage in order to hide initialWelcome
                                                                                 // on refresh / revisit of the page

  // use a reference to automatically place focus on input if user submits name but did not enter anything
  const inputRef = useRef(null);
  
  const handleSubmit = () => {
    if (tempName) {
      setAgentName(tempName);
    } else {
      setInputWarn(true);
      inputRef.current.focus();
    }
  }
  
  return (
    <div className={styles.intro}>
      <h3>{revealed ? <Typewrite page={(fr ? 'moohpFr' : 'moohp')} /> : null}</h3>
      <div className={styles.jerryWelcome}>
        <img className={styles.compowderJerry} src='/jerry/compowder-jerry.svg' alt={fr ? 'Hologramme de Jerry dans le compowder' : 'Hologram of Jerry in the Compowder'} />
        
        <div className={classNames(`${styles.welcomeAgent}`, { 'hide': !hideInitial })}></div>
        
        <div className={classNames(`${styles.initialWelcome}`, { 'fade': agentName, 'hide': agentName && hideInitial })} onAnimationEnd={() => setHideInitial(true)}>
            <p className={styles.initialGreeting}>{fr ? 'Bonjour! Je suis Jerry Lewis, le fondateur de MOOHP: l\'organisation Marianopolis de la protection humaine. Vous devriez être la nouvelle recrue — comment vous appelez-vous?' : 'Greetings! I am Jerry Lewis, the founder of MOOHP: the Marianopolis Organization of Human Protection. You must be the new recruit—what is your name?'}</p>
            <div className={styles.inputGroup}>
            <input ref={inputRef} className={classNames(`${styles.inputName}`, { 'inputWarn': inputWarn })} type='text' onChange={(e) => setTempName(e.target.value)}
                placeholder={inputWarn ? (fr ? 'Veuillez entrer un nom' : 'Please enter a name') : (fr ? 'Entrez un nom de code' : 'Type a codename')} />
              <Button outline={true} className={styles.enterName}
                gradientDuoTone="pinkToOrange"
                onClick={handleSubmit}
                >{fr ? 'Soumettre' : 'Enter'}</Button>
            </div>
          </div>
      </div>
      

      <p className={styles.moohpDesc}>{fr ? 'Ici, chez l\'organisation Marianopolis pour la protection des humains, nos espions (également des étudiants à temps plein à M.A.R.I.) travaillent sans relâche pour protéger le monde. L\'équipe, dirigée par l\'agent exécutif Paradis et menée par les agents en chef Abou-Haidar et Patel, est divisée en cinq départements' : 'Here at the Marianopolis Organisation of Human Protection, our double agents work tirelessly to keep the world safe. The team, managed by executive agent Paradis and led by head agents Abou-Haidar and Patel, is divided into the five following departments'}:</p>
      <ul className={styles.moohpDesc}>
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
