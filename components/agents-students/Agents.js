import { Card } from "flowbite-react";
import styles from "../../styles/agent.module.css";
import { engM, frM } from "./variablesMembers.js";
import { useRouter } from "next/router";
import Typewrite from '../Typewrite';

export default function Agents(){
    const router = useRouter();
    const currentRoute = router.pathname;
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
    const students = lang ? frM : engM;

    return (
        <div className={styles.bg}>
            <h1 className={styles.title}>
                <b><Typewrite page='agents' /></b>
            </h1>
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
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
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
                            {lang ? `Agent ${props.year} - MOOHP` : `${props.year} Agent - MOOHP`}
                        </h2>
                        <p>
                            {lang ? `Nom de code: ${props.code}` : `Codename: ${props.code}`}
                        </p>
                        <p>
                            {lang ? `Âge: ${props.age}` : `Age: ${props.age}`}
                        </p>
                        <p>
                            {lang ? `Taille: ${props.height}` : `Height: ${props.height}`}
                        </p>
                        <p>
                            {lang ? `Spécialisation: ${props.specialty}` : `Specialty: ${props.specialty}`}
                        </p>
                        <p>
                            {lang ? `Département: ${props.club}` : `Department: ${props.club}`}
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