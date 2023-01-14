import { Card } from "flowbite-react";
import styles from "../../styles/agent.module.css";
import { engM, frM } from "./variablesMembers.js";
import { useRouter } from "next/router";
import Typewrite from '../Typewrite';
import { useContext } from 'react';
import AppContext from '../AppContext';

export default function Agents() {
    // "fetch"/use saved agent name
  const [agentName, setAgentName] = useContext(AppContext);
  const name = (agentName ? ' ' : '') + agentName;
    
    const router = useRouter();
    const currentRoute = router.pathname;
    const fr = currentRoute.includes('/fr') ? 'fr' : '';
    const students = fr ? frM : engM;

    return (
        <div className={styles.bg}>
            <h1 className={styles.title}>
                <b><Typewrite page='agents' /></b>
            </h1>
            <p className={styles.intro}>
                {fr ? `Une équipe de 18 agents de MOOHP ont été soigneusement sélectionnés pour partir en mission avec vous, agent${name}. Nous vous suggérons de vous familiariser avec eux avant de nous rejoindre au siège de MOOHP.`
                    : `A team of 18 MOOHP agents were carefully selected for this mission alongside you, Agent${name}. We suggest that you familiarise yourself with them before joining us at MOOHP headquarters.`}
            </p>
            {students.map((member, index) => 
                <FlipImg key={index} src={member.src} name={member.name} 
                    club={member.club} age={member.age} 
                    year={member.year} code={member.code} 
                    height={member.height} specialty={member.specialty}
                    mbti={member.mbti} gadget={member.gadget} text={member.text}
                />
            )}
        </div>
    )
}

function FlipImg(props) {
    const router = useRouter();
    const currentRoute = router.pathname;
    const fr = currentRoute.includes('/fr') ? 'fr' : '';
    return (
        <div className={styles.div}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <img src={props.src} alt={props.name} className={styles.img}/>
                    </div>
                    <div className={styles.flipCardBack}>
                        <h1>{props.name}</h1>
                        <h2>
                            {fr ? `Agent ${props.year} - MOOHP` : `${props.year} Agent - MOOHP`}
                        </h2>
                        <p>
                            {fr ? `Nom de code: ${props.code}` : `Codename: ${props.code}`}
                        </p>
                        <p>
                            {fr ? `Âge: ${props.age}` : `Age: ${props.age}`}
                        </p>
                        <p>
                            {fr ? `Taille: ${props.height}` : `Height: ${props.height}`}
                        </p>
                        <p>
                            {fr ? `Spécialisation: ${props.specialty}` : `Specialty: ${props.specialty}`}
                        </p>
                        <p>
                            {fr ? `Département: ${props.club}` : `Department: ${props.club}`}
                        </p>
                        <p>MB type: {props.mbti}</p>
                        <p>Gadget: {props.gadget}</p>
                    </div>
                </div>
            </div>
            <div className={styles.Card}>
                <Card className={styles.text}>
                    <p className={styles.name}>Agent {props.code}</p>
                    <p>&ldquo;{props.text}&rdquo;</p>
                </Card>
            </div>
        </div>
    )
}