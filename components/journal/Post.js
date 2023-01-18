import { Card, Avatar } from "flowbite-react";
import styles from "../../styles/Post.module.css";
import { engPosts, frPosts } from "./variablesPosts";

const Info = (props) => {
	return (
		<div className={`${styles.container} font-kiwi`}>
			<Avatar img={props.avatar} rounded={true} className={styles.avatarContainer}
				alt="student profile picture" status={props.status}>
			</Avatar>
			<div className={styles.postContainer}>
				<div className={"space-y-1.2"}>
					<div className={styles.author}>
						<strong>{props.author}</strong>
					</div>
					<div className={styles.date}>
						{props.date}
					</div>
				</div>
				<Card imgSrc={props.image} className={styles.cardContainer}>
					<p className={styles.username}>
						@{props.username}
					</p>
					<p className={styles.caption}>
						{props.caption}
					</p>
					<p className={styles.hashtag}>
						#{props.hashtags}
					</p>
					<div className={styles.commentContainer}>
						<p className={styles.commenter}><strong>{props.commenter}</strong></p>
						<p>{props.comment}</p>
					</div>
					<p className={styles.likes}>
						{props.likes} {props.fr ? 'J\'aime' : 'likes'}
					</p>
				</Card>
			</div>
		</div>
	);
};

const Post = ({ fr }) => {
	const post = fr ? frPosts : engPosts;

	return (
		<div className={styles.div}>
			{post.map((post, index) =>
				<Info key={index} fr={fr} avatar={post.avatar} status={post.status} author={post.author}
					date={post.date} image={post.src} username={post.user} caption={post.caption}
					hashtags={post.hashtags} commenter={post.commenter} comment={post.comment} likes={post.likes} />
			)}
		</div>
	);
};

export default Post;
