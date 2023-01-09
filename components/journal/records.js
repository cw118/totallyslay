import styles from "../../styles/records.module.css"
import {Tabs} from "flowbite-react"

export default function Records() {
    return(
        <Tab />
    )

}

function Tab() {
    <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title="Robot">
            Robot
        </Tabs.Item>
        <Tabs.Item title="Kiosk">
            Kiosk
        </Tabs.Item>
        <Tabs.Item title="Website">
            Website
        </Tabs.Item>
        <Tabs.Item title="Video">
            Video
        </Tabs.Item>
        <Tabs.Item title="Programming">
            Programming
        </Tabs.Item>
    </Tabs.Group>
}