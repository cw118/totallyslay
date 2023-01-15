import GameField from "./GameField";
import styles from "../../styles/Avia.module.css";
import GamePiece from "./GamePiece";
import RedGamePiece from "./RedGamePiece";
import Towers from "./Towers";
import Typewrite from '../Typewrite';
import { useContext } from 'react';
import AppContext from '../AppContext';

const Avia = ({ fr }) => {
  // "fetch"/use saved agent name
  const [agentName, setAgentName] = useContext(AppContext);
  const name = (agentName ? ' ' : '') + agentName;

    return (
        <>
          <h1 className={styles.header}><strong><Typewrite page={fr ? 'aviaFr' : 'avia'} /></strong></h1>
            <div className={styles.intro}>
                <img src="/logo/avia-logo.svg" alt="AVIA Logo" className={styles.aviaLogo}/>
                <p>
                    <strong>{fr ? `Nous sommes contents que vous soyez là, agent${name}! ` : `We're glad you made it, Agent${name}! `}</strong>
                    {fr ? `La CRC, une association à but non lucratif qui organise des compétitions de robotique annuelles, a demandé de l'aide à MOOHP (Organisation Marianopolis pour la Protection Humaine).` : `The Canadian Robotics Competition (CRC), a non-profit organisation that runs annual robotics competitions, has reached out to MOOHP for help.`}
                </p><br></br>
          <p>
            {fr ? 'Cette compétition multidisciplinaire exige l\'implication de tous les agents chez MOOHP, incluant vous-même. Intégrant l\'informatique, la technologie et l\'ingénierie avec les arts et lettres, les département de robotique, de kiosque, de site web et de cinématographie sont tous indispensables pour cette mission!' : 'This multidisciplinary competition requires the involvement of all agents at MOOHP, including you. Integrating computer science, technology, and engineering with visual arts and humanities; the Machinery, Manufacturing, Hacking, Virtual Network, Marketing and divisions are integral to this mission!'}
          </p>
                <img src="/logo/crc-logo.svg" alt="CRC Logo" className={styles.crcLogo}/>
            </div>

            <h1 className={styles.header}><strong>{fr ? `AVIA procédera comme suit:` : `AVIA will proceed as follows:`}</strong></h1>
            <p className={styles.textOnly}>{fr ? `À chaque joute, vous serez regroupés en équipes de deux avec des espions d\’une agence différente afin de compléter cette mission. Placés dans soit l\’équipe bleue ou jaune, vous jouerez l\’une contre l\’autre pour une durée de 5 minutes.` 
            : `You are to be teamed up with agents from a different agency to complete this mission in every heat. Placed in either the yellow or blue team, you will compete against the other over several heats.`}</p>
            
            {/* wrapping each container (uses display: grid) in another grid container is needed for proper rendering in Safari */}
            <div className='grid'><div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1 className={styles.sectionTitle}>{fr ? `Le terrain de jeu` : `The Field`}</h1>
                        <p>{fr ? `Au début de chaque joute, les gadgets de chaque équipe seront stationnés à chaque extrémité du terrain octogonal à niveau unique marquée par des zones carrées bleues et jaunes; ce sont les zones de départ.` 
                        : `At the beginning of each heat, teams\' gadgets will be stationed at either end of a single level octagon-shaped playing field, marked by blue and yellow tiled zones; these are the starting zones.`} </p>
                    </div>
                    <p className={styles.info}>{fr ? `Il y a trois tours situées le long du milieu du terrain de jeu. La tour centrale est la plus grande. Notez la zone multiplicatrice entre les zones de départ de chaque équipe` 
                    : `There are three towers located along the middle of the playing field, the center one being the tallest. Also note the multiplier zone between each team\'s starting zone.`} </p>
                </div>
                <GameField />
            </div></div>
            <div className='grid'><div className={styles.container}>
                <GamePiece />
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1 className={styles.sectionTitle}>{fr ? `La pièce de jeu` : `The Game Piece`}</h1>
                        <p>{fr ? `Le robot de chaque équipe doit transporter des pièces de jeu hexagonales de bois qui seront dispersées soit face vers le haut ou sur leur côté à travers le terrain de jeu. Seules deux pièces peuvent être transportées par un robot en même temps.` 
                        : `Agents\' gadgets must transport hexagonal wooden game pieces, as shown, that will be scattered either face-up or on its side across the game field. Only two game pieces can be carried by a gadget at the same time.`}</p>
                    </div>
                </div>
            </div></div>
            <div className='grid'><div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1 className={styles.sectionTitle}>Earn Points</h1>
                        <p>{fr ? `Les pièces de jeu doivent être placées sur chaque niveau des tours. La tour centrale a 7 niveaux alors que les deux tours adjacentes ont 6 niveaux chacune. Afin de gagner des points et de compléter cette mission avec succès, les agents doivent accumuler autant de points que possible à l\’aide des pièces de jeu.` 
                        :`Game pieces are to be placed flat on each level of the following towers; the centre tower has 7 levels whilst its adjacent towers have 6 levels. To garner points and complete this mission successfully, agents must accumulate as many points as possible using the game pieces. `}</p>
                    </div>
                    <p className={styles.info}>{ fr ? `Les pièces de jeu posées face vers le haut attribueront 35 points à l\’équipe correspondant à la couleur faisant face en haut. Les pièces de jeu placées sur les niveaux des tours gagnent des points qui augmentent avec la hauteur des niveaux des tours.` 
                    : `Game pieces laid face-side up on the ground will award 35 points to the team corresponding with the colour facing upwards. Game pieces placed on tower levels collect points increasing along the height of towers.`}</p>
                </div>
                <Towers />
            </div></div>
            <div className='grid'><div className={styles.container}>
                <RedGamePiece />
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1 className={styles.sectionTitle}>The Red Game Piece</h1>
                        <p>{ fr ? `Mise en garde ! Il y a une pièce de jeu unique avec un centre rouge. Placer cette pièce de jeu dans la tour annule les points gagnés par les pièces de jeu placés dans les sous-niveaux. ` 
                        : `Caution! A single game piece is red. Placing the red game piece in the tower invalidates the points earned by game pieces placed in lower levels of a tower.`}</p>
                    </div>
                </div>
            </div></div>
            <p className={styles.textOnly}>{fr ? `Vous avez 5 minutes pour compléter chaque joute.` : `You have 5 minutes to complete each heat.`}</p>
            <p className={styles.textOnly}>{fr ? `Les agents MOOHP doivent se rassembler pendant trois jours, du 16 au 18 février, à l\’École Curé-Antoine-Labelle. On compte sur vous!` 
                : `MOOHP agents are to convene over three days, from February 16th to 18th, at École Curé-Antoine-Labelle. We\'re counting on you!`}</p>
            <h1 className={styles.vidHeader}>{fr ? `Pour plus d\'informations` : `For further information`}</h1>
            <iframe className={styles.video} src="https://www.youtube.com/embed/XZcGbwce7fU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </>
    )
}

export default Avia;
