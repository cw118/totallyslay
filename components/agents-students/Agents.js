import { Card } from "flowbite-react";
import styles from "../../styles/Agent.module.css";
import { engM, frM } from "./variablesMembers.js";
import Typewrite from '../Typewrite';
import { useContext } from 'react';
import AppContext from '../AppContext';

const FlipImg = (props) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.flipCardInner}>
					<div className={styles.flipCardFront}>
						<img src={props.src} alt={props.name} className={styles.img} />
						<div className={styles.tapMe}>{props.fr ? 'Appuyez sur moi!' : 'Tap me!'}</div>
					</div>
					<div className={styles.flipCardBack}>
						<h1>{props.name}</h1>
						<h2>
							{props.fr ? `Agent ${props.year} - MOOHP` : `${props.year} Agent - MOOHP`}
						</h2>
						<p>
							{props.fr ? `Nom de code: ${props.code}` : `Codename: ${props.code}`}
						</p>
						<p>
							{props.fr ? `Âge: ${props.age}` : `Age: ${props.age}`}
						</p>
						<p>
							{props.fr ? `Taille: ${props.height}` : `Height: ${props.height}`}
						</p>
						<p>
							{props.fr ? `Spécialisation: ${props.specialty}` : `Specialty: ${props.specialty}`}
						</p>
						<p>
							{props.fr ? `Département: ${props.club}` : `Department: ${props.club}`}
						</p>
						<p>MB type: {props.mbti}</p>
						<p>Gadget: {props.gadget}</p>
					</div>
				</div>
			</div>
			<div className={styles.card}>
				<Card className={styles.text}>
					<p className={styles.name}>Agent {props.code}</p>
					<p>&ldquo;{props.text}&rdquo;</p>
				</Card>
			</div>
		</div>
	);
}

const Agents = ({ fr }) => {
	// "fetch"/use saved agent name
	const [agentName, setAgentName] = useContext(AppContext);
	const name = (agentName ? ' ' : '') + agentName;
	
	const students = fr ? frM : engM;

	return (
		<div className={styles.bg}>
			<div className={styles.title}>
				<Typewrite page='agents' className={styles.title} />
			</div>
			<p className={styles.intro}>
				<strong>Agent{name},</strong>
				{fr ? ` une équipe de 18 agents de MOOHP ont été soigneusement sélectionnés pour vous accompagner dans cette mission. Nous vous suggérons de vous familiariser avec eux avant de nous rejoindre au siège de MOOHP.`
					: ` a team of 18 MOOHP agents were carefully selected for this mission alongside you. We suggest that you familiarise yourself with them before joining us at MOOHP headquarters.`}
			</p>
			{students.map((member, index) =>
				<FlipImg fr={fr} key={index} src={member.src} name={member.name}
					club={member.club} age={member.age}
					year={member.year} code={member.code}
					height={member.height} specialty={member.specialty}
					mbti={member.mbti} gadget={member.gadget} text={member.text}
				/>
			)}
		</div>
	);
}

export default Agents;
