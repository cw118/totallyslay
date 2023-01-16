import { useContext } from 'react';
import AppContext from '../AppContext';
import RobotArm from './RobotArm';
import RobotArmTwo from './RobotArmTwo';
import RobotBase from './RobotBase';
import styles from '../../styles/Robot.module.css';
import Typewrite from '../Typewrite';

const Robot = ({ fr }) => {
  // "fetch"/use saved agent name
  const [agentName, setAgentName] = useContext(AppContext);

  return (
    <div className={styles.pageWrapper}>
      <h3 className={styles.title}><Typewrite page='robot' /></h3>
      <p className={styles.intro}>
        {fr ? `Agent ${agentName}, voici toutes les informations dont vous aurez besoin sur le robot à construire — il sera crucial envers l'accomplissement de la mission AVIA.` : `Agent ${agentName}, here is all the information you will need on the robot to build — it will be crucial towards the completion of AVIA.`}
      </p>
      <div className={styles.rowOne}>
        <RobotBase />
        <RobotArmTwo />
        <RobotArmTwo />
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.container}>
          <div className={styles.rowTwoModels}>
            <RobotArm />
            <RobotArmTwo />
          </div>
          <p>Following the kickoff, the machinist division began brainstorming ideas 
            for the arm of the robot. Conflicted between two models, they build the two 
            following prototypes</p>
        </div>
        <div className={styles.container}>
          <p className={styles.div}>The Chosen Arm : Claudine</p>
          <p>The arm of the robot is composed of 3 two-wire motors that ensure two motion 
            systems: linear motion and rotation. The horizontal linear motion is necessary for 
            picking up and dropping game pieces, whilst the rotation of the arm allows the coloured 
            face corresponding to agents’ team to face upwards.</p>
            <p>The Base</p>
          <p>The [dimension] base of the robot consists of 4 [type] wheels, motorized individually
             by [motor type]. The wheels are surrounded by an aluminium extrusion frame, and 3D-printed 
             adapters to allow them to use bearings for circular shafts for the hexagonal shaft. (LOL WHAT). </p>
        </div>
      </div>
      <div className={styles.rowThree}>
        <div className={styles.imageContainer}>
          <img src="/robot/electric.png" alt="Cabbage ball (temp photo)" />
          <img src="/robot/sauder.png" alt="Cabbage ball (temp photo)" />
        </div>
        <div className={styles.container}>
          <p>The Lift</p>
          <p>After careful research, the Machinery agents determined that a three stage 
            cascading lift would be the best option to build a mechanism capable of both 
            reaching great heights as well as retracting itself, creating a cascading motion. 
            The lift is constructed using aluminium extrusions, chosen for their lightweight and 
            durable nature, and 3D printed parts to allow the extrusions to roll freely. The 
            rollers, however, must be strategically placed so as three of the four faces of an 
            extrusion are free of any obstacles. In order to achieve a maximum height, after multiple 
            designs, agents deem it optimal to attach the rollers to the second stage, and allow them 
            to roll freely on the first and third stage. </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/robot/base.png" alt="Cabbage ball (temp photo)" />
          <img src="/robot/sofia-drill.png" alt="Cabbage ball (temp photo)" />
        </div>
      </div>
      <div className={styles.container}>
        <p>The Machinery Division encountered many challenges as they prepared for the mission. Having 
          not anticipated how many small adjustments would be necessary to their original design, they 
          quickly learnt of the importance of leaving time for testing. Agents working on the lift faced 
          many issues during its assembly due to its tedious nature; building it in a specific order was 
          vital, otherwise the lift would have to be disassembled altogether.</p>
        <p>Finding an appropriate motor strength became difficult, with the given motors being either too 
          weak or too strong. To resolve this issue, the agents decide to combine 2 weak motors in order to 
          provide the strength necessary. </p>
        <p>Agents working on the base originally designed a rectangular base for the robot. However, after 
          struggling to arrange space for the lift, they modified the design to a U-shaped base. This change 
          resulted in further problems; due to the weight of the 4 motor, the base would incline itself towards 
          the robot’s center. Therefore, they added a thick double aluminium extrusion to the base to support 
          its center.</p>
      </div>
      <div className={styles.rowOne}>
        <video width={420} height={340} controls>
          <source src="/robot/arm-linear.mp4"></source>
        </video>
        <video width={420} height={340} controls>
          <source src="/robot/arm-rotation.mp4"></source>
        </video>
        <video width={420} height={340} controls>
          <source src="/robot/lift.mp4"></source>
        </video>
      </div>
    </div>
  )
}

export default Robot;