import { Card } from "flowbite-react";
import styles from "../../styles/card.module.css";
import { useRouter } from "next/router";
import { engS, frS } from "./variables";

export default function Cards() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
    const students = lang ? frS : engS;

    return (
        <div>
            <h1 className={styles.title}>
            {lang ? "Étudiants et personel" : "Student Body and Staff"}
            </h1>
            <div className={styles.div}>
                {students.map((member, index) => 
                    <Carte key={index} src={member.src} name={member.name} 
                    club={member.club} fun={member.fun} age={member.age} year={member.year}/>
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
                    <b>{lang ? 'Nom: ' : 'Name: '}</b> {`${props.name}`}
                </p>
                <p>
                    <b>{lang ? 'Âge: ' : 'Age: '}</b> {`${props.age}`}
                </p>
                <p>
                    <b>{props.year}</b>
                </p>
                <p>
                    <b>{lang ? 'Comité(s): ' : 'Club(s): '}</b> {`${props.club}`}
                </p>
                <p>
                    <i>&ldquo;{props.fun}&rdquo;</i>
                </p>
            </div>
        </Card>
    );
}

