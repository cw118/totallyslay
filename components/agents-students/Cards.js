import { Card } from "flowbite-react";
import styles from "../../styles/Card.module.css";
import { engS, frS } from "./variablesMembers.js";

export default function Cards({ fr }) {
    const students = fr ? frS : engS;

    return (
        <div>
            <h1 className={styles.title}>
                {fr? "Étudiants et personnel" : "Student Body and Staff"}
                <img className={styles.sticker} src="/backgrounds/sticker.svg" alt={fr ? "Étoile" : "Star"} />
            </h1>
            <p className={`${styles.clubsDesc} font-kiwi`}>
              {fr ? `Tous les étudiants à M.A.R.I. participent à au moins un comité: 
                  le comité Arduino construit des robots, le comité de développement web crée des sites web, 
                  le comité de bricolage travaille sur des projets de construction et fait l'artisanat, 
                  le comité de programmation résout des problèmes de programmation, et le comité de film
                  réalise des vidéos.` 
                  : `M.A.R.I. students all take part in at least one club: the Arduino club engineers robots, 
                  the web development club creates websites, the DIY club works on construction projects and crafts,
                  the programming club solves coding challenges, and the film club directs and produces videos.`}</p>
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
        <Card className={styles.card} imgSrc={props.src} horizontal={true}>
            <div className="font-kiwi">
                <p>
                    <strong>{props.fr ? 'Nom: ' : 'Name: '}</strong> {`${props.name}`}
                </p>
                <p>
                    <strong>{props.fr ? 'Âge: ' : 'Age: '}</strong> {`${props.age}`}
                </p>
                <p>
                    <strong>{props.year}</strong>
                </p>
                <p>
                    <strong>{props.fr ? 'Comité(s): ' : 'Club(s): '}</strong> {`${props.club}`}
                </p>
                <p className={styles.quote}>
                    <i>&ldquo;{props.fun}&rdquo;</i>
                </p>
            </div>
        </Card>
    );
}

