import {Card} from "flowbite-react"
import styles from "../../styles/card.module.css"
import { useRouter } from "next/router"
import { engS, frS } from "./variables";

export default function Cards() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
    const students = lang ? frS : engS;

    return (
        <div>
            <h1 className={styles.title}>
            {lang ? "Étudiants" : "Student Body"}
            </h1>
            <div className={styles.div}>
                {students.map((member, index) => 
                    <Carte key={index} src={member.src} name={member.name} club={member.club} fun={member.fun} age={member.age} year={member.year}/>
                )}
            </div>
        </div>
    );
}

function Carte(props) {
    const router = useRouter();
    const currentRoute = router.pathname;
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
    return (
        <Card
            className={styles.card} 
            imgSrc={props.src}
            horizontal = {true}
        >
            <div className="font-kiwi">
                <p>
                    {lang ? `Nom: ${props.name}` : `Name: ${props.name}`}
                </p>
                <p>
                    {lang ? `Âge: ${props.age}` : `age: ${props.age}`}
                </p>
                <p>
                    {props.year}
                </p>
                <p>
                    {lang ? `Comité(s): ${props.club}` : `Club(s): ${props.club}`}
                </p>
                <p>
                    {props.fun}
                </p>
            </div>
        </Card>
    );
}

