import styles from "../../styles/Archive.module.css"
import {Tabs, Card, Timeline} from "flowbite-react"
import {robEng, kioskEng, webEng, vidEng, progEng, robFr, kioskFr, webFr, vidFr, progFr} from "./variablesArchives.js"
import { useRouter } from "next/router"

export default function Archive() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const lang = currentRoute.includes('/fr') ? 'fr' : '';
    const rob = lang ? robFr : robEng;
    const kiosk = lang ? kioskFr : kioskEng;
    const web = lang ? webFr : webEng;
    const vid = lang ? vidFr : vidEng;
    const prog = lang ? progFr : progEng;

    return(
        <>
        <div className={styles.intro}>
            <h1 className={styles.header}><strong>MOOHP Archives</strong></h1>
            <p>MOOHP’s directors carefully curated a team of agents from 
                the Marianopolis Academic Research Institute to complete the
                AVIA 2023 mission. 18 members first convened in early September, 
                then consistently twice a week, to explore their skillsets and 
                discover how they could each contribute to such an important mission.</p>
        </div>
        <Tabs.Group aria-label="Tabs with icons" style="underline" className={styles.tabs}>
            <Tabs.Item title="Robot">
                {rob.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="Kiosk">
                {kiosk.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="Website">
                {web.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="Video">
                {vid.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} text={member.text}/>
                )}
            </Tabs.Item>
            <Tabs.Item title="Programming">
                {prog.map((member, index) => 
                    <Posts key={index} time={member.time} img={member.img} text={member.text}/>
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
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time> 
                        {props.time}
                    </Timeline.Time>
                    <Card imgSrc={props.img} horizontal={true} className={styles.card}>
                        <p>
                            {props.text}
                        </p>
                    </Card>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}