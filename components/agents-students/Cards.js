import { Card } from "flowbite-react";
import styles from "../../styles/card.module.css";
import { engS, frS } from "./variablesMembers.js";

export default function Cards({ fr }) {
    const students = fr ? frS : engS;

    return (
        <div>
            <h1 className={styles.title}>
                {fr? "Étudiants et personel" : "Student Body and Staff"}
            </h1>
            <div className={styles.div}>
                {students.map((member, index) => 
                    <Carte fr={fr} key={index} src={member.src} name={member.name} 
                    club={member.club} fun={member.fun} age={member.age} year={member.year}/>
                )}
            </div>
        </div>
    );
}

function Carte(props) {

    return (
        <Card className={styles.card} imgSrc={props.src} horizontal = {true}>
            <div className="font-verdana">
                <p>
                    <b>{props.fr ? 'Nom: ' : 'Name: '}</b> {`${props.name}`}
                </p>
                <p>
                    <b>{props.fr ? 'Âge: ' : 'Age: '}</b> {`${props.age}`}
                </p>
                <p>
                    <b>{props.year}</b>
                </p>
                <p>
                    <b>{props.fr ? 'Comité(s): ' : 'Club(s): '}</b> {`${props.club}`}
                </p>
                <p>
                    <i>&ldquo;{props.fun}&rdquo;</i>
                </p>
            </div>
        </Card>
    );
}

