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
    )
}

function Posts(props) {
    return(
        <Timeline>
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