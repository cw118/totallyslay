import { useContext } from 'react';
import AppContext from '../AppContext';
import Link from 'next/link';
import Model from './Model';
import RobotArm from './RobotArm'; // the two robot arm models have labels/subtitles
import RobotArmTwo from './RobotArmTwo'; // so use separate exports instead of <Model /> for simplicity
import styles from '../../styles/Robot.module.css';
import Typewrite from '../Typewrite';
import BottomNav from '../nav/BottomNav';

const Robot = ({ fr }) => {
  // "fetch"/use saved agent name
  const [agentName, setAgentName] = useContext(AppContext);
  const name = (agentName ? ' ' : '') + agentName;

  return (
    // many grid elements are wrapped in another grid element/container
    // in order for Safari to display them properly/as intended
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.title}><Typewrite page='robot' /></div>
        <p className={styles.intro}>
          <strong>Agent{name},</strong>
          {fr ? ` voici toutes les informations dont vous aurez besoin sur le robot à construire, qui sera crucial pour l'accomplissement de la mission AVIA.` : ` here is all the information you will need on the robot to build — it will be crucial towards the completion of mission AVIA.`}
        </p>
        <div className='grid'><div className={styles.rowOne}>
          <Model model='base' />
          <Model model='robot' />
          <Model model='lift' />
        </div></div>

        <div className='grid'><div className={styles.rowTwo}>
          <div className={styles.container}>
            <div className={styles.rowTwoModels}>
              <RobotArm fr={fr} />
              <RobotArmTwo fr={fr} />
            </div>
            <p>{fr ? `Après le lancement de la compétition, la département de machinerie a
                  commencé à penser à des idées pour construire le bras du robot. Hésitant entre deux modèles,
                  l'équipe a décidé de construire les deux prototypes suivants.`
                : `Following the kickoff, the machinist division began brainstorming ideas
                  for the arm of the robot. Conflicted between two models, they build the two
                  following prototypes.`}</p>
          </div>
          <div className={styles.container}>
            <h3 className={styles.subheading}>{fr ? 'Le bras robotique choisi (bras 1)' : 'The Chosen Arm (Arm 1)'}</h3>
            <p>{fr ? `Le bras du robot est composé de 3 servomoteurs transmettant deux types de mouvement: un
                    mouvement de translation et un mouvement de rotation. Le robot utilise le système de mouvement
                    de translation pour resserrer les pièces de jeu entre ses pinces. Le système de rotation, quant
                    à lui, existe pour retourner les pièces de jeu de bord pour que leur face soit de la bonne couleur.`
                  : `The arm of the robot is composed of 3 servos that ensure two motion
                      systems: linear motion and rotation. The horizontal linear motion is necessary for
                      picking up and dropping game pieces, whilst the rotation of the arm allows the coloured
                      face corresponding to agents' team to face upwards.`}</p>
            <h3 className={styles.subheading}>{fr ? 'La base' : 'The Base'}</h3>
            <p>{fr ? `[traduction ici]`
              : `[incomplete!] The [dimension] base of the robot consists of 4 [type] wheels, motorized individually
              by [motor type]. The wheels are surrounded by an aluminum extrusion frame, and 3D-printed
              adapters to allow them to use bearings for circular shafts for the hexagonal shaft. (LOL WHAT).`}</p>
          </div>
        </div></div>

        <div className='grid'><div className={styles.rowThree}>
          <div className='grid'><div className={styles.imageContainer}>
            <img src="/robot/electric.png" alt={fr ? 'Le système CrcDuino' : 'The CrcDuino'} />
            <img src="/robot/solder.png" alt={fr ? 'Soudage des fils' : 'Soldering wires'} />
          </div></div>
          <div className='grid'><div className={styles.container}>
            <h3 className={styles.subheading}>{fr ? 'Le système d\'élévation' : 'The Lift'}</h3>
            <p>{fr ? `Après de longues heures de recherche, les agents du département de la machinerie ont décidé
                      de construire un mécanisme d'élévation télescopique. Ce système d'élévation est fait d'extrusions
                      d'aluminium (choisies pour leur faible masse et leur bonne durabilité) et de parties d'imprimantes
                      3D (utilisées pour attache chaque étage ensemble). Pour ne pas que ces parties d'imprimantes 3D se
                      bloquent l'un et l'autre, ces pièces sont chacune placées au deuxième étage du système d'élévation.
                      Ceci optimise ainsi la hauteur maximale que le système d'élévation peut atteindre.`
                  : `After careful research, the Machinery agents determined that a three stage
                      cascading lift would be the best option to build a mechanism capable of both
                      reaching great heights as well as retracting itself, creating a cascading motion.
                      The lift is constructed using aluminum extrusions, chosen for their lightweight and
                      durable nature, and 3D printed parts to allow the extrusions to roll freely. The
                      rollers, however, must be strategically placed so as three of the four faces of an
                      extrusion are free of any obstacles. In order to achieve a maximum height, after multiple
                      designs, agents deem it optimal to attach the rollers to the second stage, and allow them
                      to roll freely on the first and third stage.`}</p>
          </div></div>
          <div className='grid'><div className={styles.imageContainer}>
            <img src="/robot/base.png" alt={fr ? 'La base du robot' : 'The robot\'s base'} />
            <img src="/robot/sofia-drill.png" alt={fr ? 'Un membre de l\'équipe perce une pièce de métal' : 'A team member drilling a piece of metal'} />
          </div></div>
        </div></div>
        <div className={styles.container}>
          <h3 className={styles.subheading}>{fr ? 'Difficultés' : 'Struggles'}</h3>
          <p>{fr ? `Le département de machinerie a rencontré plusieurs problèmes lors de leur préparation pour 
                    leur mission. N'ayant pas anticipé chaque petit ajustement nécessaire qu'il fallait ajouter 
                    à leur idée originale, ils ont rapidement constaté l'importance de se prendre à l'avance. En 
                    effet, les agents s'occupant du système d'élévation ont rencontré plusieurs problèmes lors de 
                    son assemblage. Ils se sont rendu compte assez tôt qu'il fallait assembler ce système dans un 
                    ordre spécifique, sinon il faudrait tout défaire et recommencer à zéro.`
                  : `The Machinery Division encountered many challenges as they prepared for the mission. Having
                  not anticipated how many small adjustments would be necessary to their original design, they
                  quickly learnt of the importance of leaving time for testing. Agents working on the lift faced
                  many issues during its assembly due to its tedious nature; building it in a specific order was
                  vital, otherwise the lift would have to be disassembled altogether.`}</p>
          <p>{fr ? `Pour le bras robotique, trouver un servomoteur spécifique était difficile. Les servomoteurs dans les ateliers 
                    de MOOHP était soit trop fort, soit trop faible. Pour régler ce problème, les agents ont décidé de combiner 2 
                    servomoteurs faibles pour atteindre une force juste parfaite.`
                : `For the arm, finding an appropriate motor strength became difficult, with the given motors being either too
                weak or too strong. To resolve this issue, the agents decide to combine 2 weak motors in order to
                provide the strength necessary.`}</p>
          <p>{fr ? `Les agents qui travaillaient sur la base, quant à eux, voulaient originellement construire une 
                    base rectangulaire. Cependant, pour faire de la place pour le système d'élévation, ils ont 
                    modifié leur base pour lui donner une forme de U. Ce changement a causé d'autres problèmes comme 
                    le fait que la base s'incline vers l'intérieur à cause du poids des moteurs au milieu. Ainsi, les 
                    agents ont attaché une longue double pièce d'aluminium épaisse pour supporter le centre de la base.`
                : `Agents working on the base originally designed a rectangular base for the robot. However, after
                  struggling to arrange space for the lift, they modified the design to a U-shaped base. This change
                  resulted in further problems; due to the weight of the 4 motor, the base would incline itself towards
                  the robot's center. Therefore, they added a thick double aluminum extrusion to the base to support
                  its center.`}</p>
        </div>

        <div className='lg:grid'><div className={styles.vidRow}>
          <video width={420} height={340} controls>
            <source src="/robot/arm-rotation.mp4"></source>
          </video>
          <video width={420} height={340} controls>
            <source src="/robot/lift.mp4"></source>
          </video>
          <video width={420} height={340} controls>
            <source src="/robot/assembling-robot.mp4"></source>
          </video>
        </div></div>

        <div className={styles.vidContainer}>
          <h1 className={styles.vidHeader}>{fr ? `Tutoriel: Comment construire le bras robotique` : `Tutorial: How to Build the Robotic Arm`}</h1>
          <iframe className={styles.video} src="https://www.youtube.com/embed/XZcGbwce7fU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>

      <BottomNav fr={fr} name={name}>
        <Link href={fr ? '/fr/moohp' : '/moohp'}>{fr ? 'Siège de MOOHP' : 'MOOHP headquarters'}</Link>
        <Link href={fr ? '/fr/moohp/avia' : '/moohp/avia'}>{fr ? 'En apprendre plus sur votre mission' : 'Learn more about your mission'}</Link>
        <Link href={fr ? '/fr/moohp/agents' : '/moohp/agents'}>{fr ? 'Rencontrer l\'équipe de MOOHP' : 'Meet the MOOHP team'}</Link>
        <Link href={fr ? '/fr/moohp/archives' : '/moohp/archives'}>{fr ? 'Consulter nos archives' : 'Check out our archives'}</Link>
      </BottomNav>
    </>
  );
}

export default Robot;