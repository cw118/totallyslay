import styles from "../../styles/Archive.module.css";
import { Tabs, Card, Timeline } from "flowbite-react";
import { robEng, kioskEng, webEng, vidEng, progEng, robFr, kioskFr, webFr, vidFr, progFr } from "./variablesArchives.js";
import { useRouter } from "next/router";
import Typewrite from '../Typewrite';

export default function Archive({ fr }) {
    const rob = fr ? robFr : robEng;
    const kiosk = fr ? kioskFr : kioskEng;
    const web = fr ? webFr : webEng;
    const vid = fr ? vidFr : vidEng;
    const prog = fr ? progFr : progEng;

    return(
        <>
        <div className={styles.intro}>
            <h1 className={styles.header}><Typewrite page={fr ? 'archivesFr' : 'archives'} /></h1>
            <p>MOOHP&apos;s directors carefully curated a team of agents from 
                the Marianopolis Academic Research Institute to complete the
                AVIA 2023 mission. 18 members first convened in early September, 
                then consistently twice a week, to explore their skillsets and 
                discover how they could each contribute to such an important mission.</p>
        </div>
        <Tabs.Group aria-label="Tabs with icons" style="underline" className={styles.tabs}>
            <Tabs.Item title="ROBOT">
                {rob.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="KIOSK">
                {kiosk.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="WEBSITE">
                {web.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="VIDEO">
                {vid.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="PROGRAMMING">
                {prog.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} alt={member.alt} text={member.text}/>
                )}
            </Tabs.Item>
        </Tabs.Group>
        </>
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