import { useState, useRef, useContext } from 'react';
import AppContext from '../AppContext';
import Link from 'next/link';
import styles from '../../styles/Moohp.module.css';
import { Button } from 'flowbite-react';
import useSessionStorage from '../Storage';
import classNames from 'classnames';

const MoohpIntro = ({ fr }) => {
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
      <h3>{fr ? 'Bienvenue à MOOHP!' : 'Welcome to MOOHP!'}</h3>
      <div className={styles.jerryWelcome}>
        <img className={styles.compowderJerry} src='/jerry/compowder-jerry.svg' alt={fr ? 'Hologramme de Jerry dans le compowder' : 'Hologram of Jerry in the Compowder'} />
        
        <div className={classNames(`${styles.welcomeAgent}`, { 'hide': !hideInitial, 'quickFadeIn': hideInitial })}>
          <p className={styles.personalizedGreeting}>
            <strong>{fr ? `Bonjour, agent ${agentName}! ` : `Greetings, Agent ${agentName}! `}</strong>
            {fr ? `Heureux de vous voir parmi nous. Venez faire un tour et prenez connaissance de MOOHP!` : `Glad to have you here. Take a look around and get to know MOOHP!`}
          </p>
          <p className={styles.jerrySignature}>{fr ? 'Cordialement, Jerry Lewis' : 'Best regards, Jerry Lewis'}</p>
        </div>
        
        <div className={classNames(`${styles.initialWelcome}`, { 'fade': agentName, 'hide': agentName && hideInitial })} onAnimationEnd={() => setHideInitial(true)}>
            <p className={styles.initialGreeting}>{fr ? 'Bonjour! Je suis Jerry Lewis, le fondateur de MOOHP: l\'Organisation Marianopolis de la Protection Humaine. Vous devriez être la nouvelle recrue. Comment vous appelez-vous?' : 'Greetings! I am Jerry Lewis, the founder of MOOHP: the Marianopolis Organization of Human Protection. You must be the new recruit. What is your name?'}</p>
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
      
      <p className={styles.moohpDesc}>{fr ? 'Ici, chez l\'Organisation Marianopolis pour la Protection Humaine, nos espions (également des étudiants à temps plein à M.A.R.I.) travaillent sans relâche pour protéger le monde. L\'équipe, dirigée par l\'agent exécutif Paradis et menée par les agents en chef Abou-Haidar et Patel, est divisée en cinq départements' : 'Here at the Marianopolis Organisation of Human Protection, our double agents work tirelessly to keep the world safe. The team, managed by executive agent Paradis and led by head agents Abou-Haidar and Patel, is divided into the five following departments'}:</p>
      <ul className={styles.moohpDesc}>
        <li><strong>{fr ? 'Machinerie' : 'Machinery'}</strong>, {fr ? 'pour nos formidables constructeurs de robot' : 'for our totally awesome robot builders'}</li>
        <li><strong>{fr ? 'Réseau virtuel' : 'Virtual Network'}</strong>, {fr ? 'qui gère notre site web ' : 'which keeps our website running'}</li>
        <li><strong>{fr ? 'Piratage informatique' : 'Hacking'}</strong>, {fr ? 'où nos programmeurs créent des programmes qui s\'attaquent à des problèmes informatiques (de façon éthique!)' : 'where our programmers solve problems (ethically!) with code'}</li>
        <li><strong>{fr ? 'Production' : 'Manufacturing/Production'}</strong>, {fr ? 'composé d\'experts en construction de kiosque' : 'composed of kiosk construction experts'}</li>
        <li><strong>{fr ? 'Marketing' : 'Marketing'}</strong>, {fr ? 'pour nos réalisateurs et producteurs vidéo' : 'for our video directors and producers'}</li>
      </ul>

      <div className={styles.bottomNav}>
        <h3 className={styles.whereNext}>{fr ? 'Où irez-vous ensuite' : 'Where to next'}, {fr ? 'agent' : 'Agent'}{agentName ? ` ${agentName}` : ''}?</h3>
        <div className={styles.buttons}>
          <Link href={fr ? '/fr/moohp/avia' : '/moohp/avia'}><Button>{fr ? 'En apprendre plus sur votre mission' : 'Learn more about your mission'}</Button></Link>
          <Link href={fr ? '/fr/moohp/agents' : '/moohp/agents'}><Button>{fr ? 'Rencontrer l\'équipe de MOOHP' : 'Meet the MOOHP team'}</Button></Link>
          <Link href={fr ? '/fr/moohp/archives' : '/moohp/archives'}><Button>{fr ? 'Consulter nos archives' : 'Check out our archives'}</Button></Link>
          <Link href={fr ? '/fr/moohp/robot' : '/moohp/robot'}><Button>{fr ? 'Découvrir le robot de MOOHP' : 'Discover the MOOHP robot'}</Button></Link>
        </div>
        <Link href={fr ? '/fr' : '/'}><Button className={styles.mariBtn}>{fr ? 'Retourner à M.A.R.I.' : 'Return to M.A.R.I.'}</Button></Link>
      </div>
    </div>
  );
}

export default MoohpIntro;
