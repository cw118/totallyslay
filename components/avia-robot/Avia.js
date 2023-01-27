import { useContext } from 'react';
import AppContext from '../AppContext';
import Link from 'next/link';
import styles from "../../styles/Avia.module.css";
import Model from './Model';
import Typewrite from '../Typewrite';
import Countdown from './Countdown';
import BottomNav from '../nav/BottomNav';

const Avia = ({ fr }) => {
  // "fetch"/use saved agent name
  const [agentName, setAgentName] = useContext(AppContext);
  const name = (agentName ? ' ' : '') + agentName;

	return (
    <>
			<div className={styles.header}><Typewrite page={fr ? 'aviaFr' : 'avia'} /></div>
			<div className={styles.intro}>
				<img src="/logo/avia-logo.png" alt="AVIA Logo" className={styles.aviaLogo} />
				<p>
					<strong>{fr ? `Nous sommes contents que vous soyez là, agent${name}! ` : `We're glad you made it, Agent${name}! `}</strong>
					{fr ? `La CRC, une association à but non lucratif qui organise des compétitions de robotique annuelles, a demandé de l'aide 
						à MOOHP (Organisation Marianopolis de la protection humaine).` 
						: 
						`The Canadian Robotics Competition (CRC), a non-profit organisation that runs annual robotics competitions, has reached 
						out to MOOHP for help.`}
				</p><br />
				<p>
					{fr ? `Cette compétition multidisciplinaire exige l'implication de tous les agents chez MOOHP, incluant vous-même. 
						Intégrant l'informatique, la technologie et l'ingénierie avec les arts et lettres, les départements de machinerie, 
						de réseau virtuel, de piratage informatique, de production et de marketing sont tous indispensables pour accomplir 
						cette mission!`:
						`This multidisciplinary competition requires the involvement of all agents at MOOHP, including you. Integrating computer 
						science, technology, and engineering with visual arts and humanities; the Machinery, Manufacturing, Hacking, Virtual 
						Network, and Marketing divisions are integral to this mission!`}
				</p>
				<img src="/logo/crc-logo.png" alt="CRC Logo" className={styles.crcLogo} />
			</div>

			<h1 className={styles.header}><strong>{fr ? `AVIA procédera comme suit:` : `AVIA will proceed as follows:`}</strong></h1>
			<p className={styles.textOnly}>
				{fr ? `À chaque joute, vous serez regroupés en équipes de deux avec des espions d'une agence différente afin de compléter 
					cette mission. Placés dans soit l'équipe bleue ou jaune, vous jouerez contre l'équipe adverse pendant 5 minutes.`
				: `You are to be teamed up with agents from a different agency to complete this mission in every heat. Placed in either 
				the yellow or blue team, you will compete against the other over several heats.`}
			</p>
			{/* wrapping each container (uses display: grid) in another grid container is needed for proper rendering in Safari */}
			<div className='grid'><div className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.info}>
						<h1 className={styles.sectionTitle}>{fr ? `Le terrain de jeu` : `The Field`}</h1>
						<p>
							{fr ? `Au début de chaque joute, les gadgets de chaque équipe seront placés dans leurs zones de départ. 
								Ces zones, marquées par des carrés bleus et jaunes, se retrouvent à chaque extrémité du terrain octogonal 
								à un niveau.`
								: `At the beginning of each heat, the teams' gadgets will be stationed at either end of a single level octagon-shaped 
								playing field, marked by blue and yellow tiled zones; these are the starting zones.`} 
						</p>
					</div>
					<p className={styles.info}>
						{fr ? `Trois tours se situent le long du milieu du terrain de jeu. Notez que la tour centrale est la plus grande. 
							De plus, une zone multiplicatrice se situe entre les zones de départ de chaque équipe.`
							: `There are three towers located along the middle of the playing field, the center one being the tallest. 
							Also note the multiplier zone between each team\'s starting zone.`} 
					</p>
				</div>
				<Model model='playing-field' />
      </div></div>

			<div className='grid'><div className={styles.container}>
				<Model model='game-piece' />
				<div className={styles.infoContainer}>
					<div className={styles.info}>
						<h1 className={styles.sectionTitle}>{fr ? `La pièce de jeu` : `The Game Piece`}</h1>
						<p>
							{fr ? `Le robot de chaque équipe doit transporter des pièces hexagonales de bois. Ces pièces de jeu sont 
								placées soit face vers le haut, face vers le bas ou sur le côté et elles sont dispersées à travers le terrain 
								de jeu. Notez que le robot peut seulement transporter deux pièces à la fois.`
							: `Agents' gadgets must transport hexagonal wooden game pieces, as shown, that will be scattered either 
							face-up or on its side across the game field. Only two game pieces can be carried by a gadget at the same time.`}
						</p>
					</div>
				</div>
      </div></div>
      
			<div className='grid'><div className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.info}>
						<h1 className={styles.sectionTitle}>{fr ? 'Gagner des points' : 'Earn Points'}</h1>
						<p>
							{fr ? `Les pièces de jeu doivent être placées sur chaque niveau des tours. La tour centrale a 7 niveaux alors 
								que les deux tours adjacentes ont chacune 6. Pour compléter cette mission avec succès, les agents 
								doivent obtenir des points en manipulant les pièces de jeu.`
								: `Game pieces are to be placed flat on each level of the following towers; the centre tower has 7 levels 
								whilst its adjacent towers have 6 levels. To garner points and complete this mission successfully, agents 
								must accumulate as many points as possible using the game pieces. `}
						</p>
					</div>
					<p className={styles.info}>
						{fr ? `Chaque équipe recevra 35 points pour chaque pièce de jeu dont la face vers le haut représente la couleur de 
							son équipe. Plus les pièces de jeu sont placées haut sur les tours, plus ces pièces de jeu rapportent des points.`
							: `Game pieces laid face-side up on the ground will award 35 points to the team corresponding with the colour 
							facing upwards. Game pieces placed on tower levels collect points increasing along the height of towers.`}
					</p>
				</div>
				<Model model='towers' />
      </div></div>
      
			<div className='grid'><div className={styles.container}>
				<Model model='red-game-piece' />
				<div className={styles.infoContainer}>
					<div className={styles.info}>
						<h1 className={styles.sectionTitle}>{fr ? 'La pièce de jeu rouge' : 'The Red Game Piece'}</h1>
						<p>
							{fr ? `Mise en garde! Il y a une pièce de jeu unique avec un centre rouge. Placez cette pièce de jeu dans 
							une tour et tous les points gagnés par les pièces de jeu placées dans les sous-niveaux de cette tour seront annulés.`
							: `Caution! A single game piece is red. Placing the red game piece in a tower invalidates the points earned 
							by game pieces placed in lower levels of a tower.`}
						</p>
					</div>
				</div>
      </div></div>
      
			<p className={styles.textOnly}>{fr ? `Nous vous rappelons que vous avez 5 minutes pour compléter chaque joute!` : `Remember that you have 5 minutes to complete each heat!`}</p>
			<p className={styles.textOnly}>{fr ? `Nous avons besoin de tous nos agents MOOHP pendant trois jours, du 16 au 18 février, à l'École Curé-Antoine-Labelle (216 Boul Marc-Aurèle-Fortin, Laval, QC). `
				: `We need all MOOHP agents to convene over three days, from February 16th to 18th, at École Curé-Antoine-Labelle (216 Blvd Marc-Aurèle-Fortin, Laval, QC). `}
				<strong>{fr ? `Nous comptons sur vous, agent${name}!` : `We're counting on you, Agent${name}!`}</strong>
      </p>
      
      <Countdown fr={fr} />
      
      <BottomNav fr={fr} name={name}>
        <Link href={fr ? '/fr/moohp' : '/moohp'}>{fr ? 'Siège de MOOHP' : 'MOOHP headquarters'}</Link>
        <Link href={fr ? '/fr/moohp/agents' : '/moohp/agents'}>{fr ? 'Rencontrer l\'équipe de MOOHP' : 'Meet the MOOHP team'}</Link>
        <Link href={fr ? '/fr/moohp/archives' : '/moohp/archives'}>{fr ? 'Consulter nos archives' : 'Check out our archives'}</Link>
        <Link href={fr ? '/fr/moohp/robot' : '/moohp/robot'}>{fr ? 'Découvrir le robot de MOOHP' : 'Discover the MOOHP robot'}</Link>
      </BottomNav>
    </>
	);
}

export default Avia;
