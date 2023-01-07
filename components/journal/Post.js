import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import styles from "../../styles/Post.module.css";
import React from "react";

const Info = (props) => {
    return (
        <div className={`${styles.container}` + " font-verdana"}>
                <Avatar
                    img={props.avatar}
                    rounded={true}
                    className={styles.avatarContainer}
                    alt="student profile picture"
                    status={props.status}
                >
                </Avatar>
            <div className={styles.postContainer}>
                <div className={"space-y-1.2"}>
                        <div className={styles.author}>{props.author}</div>
                        <div className={styles.date}>{props.date}</div>
                </div>
                    <Card
                        imgSrc={props.image}
                        className={styles.cardContainer}
                    >
                    <p className={styles.username}>@{props.username}</p>
                    <p className={styles.caption}>
                        {props.caption}
                    </p>
                    <p className={styles.hashtag}>#{props.hashtags}</p>
                    <div className={styles.commentContainer}>
                        <p><strong>{props.commenter1}</strong></p>
                        <p>{props.comment1}</p>
                    </div>
                    <p className={styles.likes}>{props.likes} likes</p>
                    </Card>
            </div>
        </div>
    )
}

const Post = () => {
    return (
    <div>
        <Info 
            author='Celia Shi'
            date='January 5th, 2023'
            avatar='/journal/avatars/celia.png'
            status="online"
            image='/journal/post-images/school_pic.png'
            username="arianagrande"
            caption='I thought I was tall but they bumped me down to the middle row :('
            hashtags='HumbleByKendrickLamar'
            commenter1='Carolyn Wu'
            comment1='you look so happy though'
            likes='2'
        />
        <Info 
            author='Vincent Ly'
            date='January 5th, 2023'
            avatar='/journal/avatars/vincent.png'
            status="busy"
            image='/journal/post-images/3spies.png'
            username="losingmysanity_"
            caption='Night Vision sunglasses are locked and loaded.'
            hashtags='MrWorldwide'
            commenter1='Adam Abbas'
            comment1='Who put perfume on??'
            likes='15'
        />
        <Info 
            author='Isabella Hensley'
            date='November 13th, 2022'
            avatar='/journal/avatars/isabella.png'
            status="offline"
            image='/journal/post-images/cabbage.png'
            username="british_person123"
            caption='Scored front row tickets to an exclusive cabbage-ball game!! (Andrea won)'
            hashtags='vegan'
            commenter1='Sofia Del Raso'
            comment1='I won BTW!!'
            likes='18'
        />
    </div>
    )
}

export default Post;


