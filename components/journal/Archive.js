import styles from "../../styles/Archive.module.css";
import { Tabs, Card, Timeline } from "flowbite-react";
import { robEng, kioskEng, webEng, vidEng, progEng, robFr, kioskFr, webFr, vidFr, progFr } from "./variablesArchives.js";
import Typewrite from '../Typewrite';
import { useContext } from 'react';
import AppContext from '../AppContext';

export default function Archive({ fr }) {
    const rob = fr ? robFr : robEng;
    const kiosk = fr ? kioskFr : kioskEng;
    const web = fr ? webFr : webEng;
    const vid = fr ? vidFr : vidEng;
    const prog = fr ? progFr : progEng;
    const entries = [{name: rob, title: "ROBOT"}, {name: kiosk, title: fr ? "KIOSQUE" : "KIOSK"}, {name: web, title: fr ? "SITE WEB" : "WEBSITE"}, 
        {name: vid, title: fr ? "VIDÉO" : "VIDEO"}, {name: prog, title: fr ? "PROGRAMMATION" : "PROGRAMMING"}
    ]
  
    const [agentName, setAgentName] = useContext(AppContext);
    const name = (agentName ? ' ' : '') + agentName;

    return(
        <div className={styles.bg}>
        <div className={styles.intro}>
            <h1 className={styles.header}><Typewrite page={fr ? 'archivesFr' : 'archives'} /></h1>
            <p>
                <strong>{fr ? `Bienvenue aux archives de MOOHP, agent${name}! ` : `Welcome to the MOOHP archives, Agent${name}! `}</strong>
                {fr ? `Les directeurs de MOOHP ont soigneusement choisi une équipe d'agent 
                de M.A.R.I. pour compléter la mission AVIA 2023. Les 18 membres 
                constituant l'équipe se sont d'abord rencontrés au début du mois de 
                septembre. Ensuite, des rencontres ont été tenues régulièrement deux 
                fois par semaine afin d'explorer les talents individuels des agents 
                et de déterminer la manière dont chacun pourra contribuer à la mission.`
                :
                `MOOHP's directors carefully curated a team of agents from 
                the Marianopolis Academic Research Institute to complete
                AVIA 2023. 18 members first convened in early September, 
                then consistently twice a week, to explore their skillsets and 
                discover how they could each contribute to such an important mission.`
                }
            </p>
        </div>
        <Tabs.Group aria-label="Tabs with icons" style="underline" className={styles.tabs}>
            {entries.map((entry, index) => 
                <Tabs.Item title={entry.title} key={index}>
                    {entry.name.map((member, index) => 
                        <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                    )}
                </Tabs.Item>
            )}
        </Tabs.Group>
        </div>
    )
}

function Posts(props) {
    return(
        <Timeline className={styles.timeline}>
            <Timeline.Item>
                <Timeline.Point className={styles.point}/>
                <Timeline.Content>
                    <Timeline.Time className={styles.time}> 
                        {props.time}
                    </Timeline.Time>
                    <Card className={"bg-transparent " + `${styles.card}`} >
                        <p className={styles.text}>
                            {props.text}
                        </p>
                        <img src={props.img} alt={props.alt} className={styles.img}/>
                    </Card>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}
