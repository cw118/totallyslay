import GameField from "./GameField";
import styles from "../../styles/Avia.module.css";
import GamePiece from "./GamePiece";
import RedGamePiece from "./RedGamePiece";
import Bee from "./Bee";

export default function Avia({ fr }) {
    return (
        <>
          <h1 className={styles.header}><strong>{fr ? 'Votre mission' : 'Your Mission'}: AVIA 2023</strong></h1>
            <div className={styles.intro}>
                <img src="/logo/avia_logo.png" alt="AVIA Logo" className={styles.aviaLogo}/>
                <p>{fr ? 'La CRC, une association à but non lucratif qui organise des compétitions de robotique annuelles, a demandé de l\'aide à MOOHP (organisation Marianopolis pour la protection des humains).' : 'The Canadian Robotics Competition (CRC), a non-profit organisation that runs annual robotics competitions, has reached out to MOOHP for help.'}</p><br></br>
          <p>
            {fr ? 'Cette compétition pluridisciplinaire exige l\'implication de tous les agents chez MOOHP, intégrant l\'informatique, la technologie et l\'ingénierie avec les arts et lettres — les divisions de robot, de kiosque, de site web et de vidéo sont toutes indispensables à cette mission!' : 'This multidisciplinary competition requires the involvement of all agents at MOOHP. Integrating computer science, technology, and engineering with visual arts and humanities; the Machinery, Manufacturing, Hacking, Virtual Network, Marketing and divisions are integral to this mission!'}
          </p>
                <img src="/logo/crc_logo.png" alt="CRC Logo" className={styles.crcLogo}/>
            </div>
            <h1 className={styles.header}><strong>AVIA will proceed as follows:</strong></h1>
            <p className={styles.textOnly}>You are to be teamed up with agents from a different agency to complete this mission in every heat. <br></br>Placed in either the yellow or blue team, you will compete against the other over several heats.</p>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <p className={styles.info}>At the beginning of each heat, teams&apos; gadgets will be stationed at either end of a single level octagon-shaped playing field, marked by blue and yellow tiled zones; these are the <strong>starting zones</strong>. </p>
                    <p className={styles.info}>There are three towers located along the middle of the playing field, the center one being the tallest. Also note the <strong>multiplier zone</strong> between each team&apos;s starting zone. </p>
                </div>
                <GameField />
            </div>
            <div className={styles.container}>
                <GamePiece />
                <div className={styles.infoContainer}>
                    <p className={styles.info}>Agents&apos; gadgets must transport hexagonal wooden game pieces, as shown, that will be scattered either face-up or on its side across the game field. Only two game pieces can be carried by a gadget at the same time.</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <p className={styles.info}>Game pieces are to be placed flat on each level of the following towers; the centre tower has 7 levels whilst its adjacent towers have 6 levels. To garner points and complete this mission successfully, agents must accumulate as many points as possible using the game pieces. </p>
                    <p className={styles.info}>Game pieces laid face-side up on the ground will award 35 points to the team corresponding with the colour facing upwards. Game pieces placed on tower levels collect points increasing along the height of towers</p>
                </div>
                <Bee />
            </div>
            <div className={styles.container}>
                <RedGamePiece />
                <div className={styles.infoContainer}>
                    <p className={styles.info}>Caution! A single game piece is red. Placing the red game piece in the tower invalidates the points earned by game pieces placed in lower levels of a tower.</p>
                </div>
            </div>
            <p className={styles.textOnly}>You have <strong>5 minutes</strong> to complete each heat/mission. <br></br>MOOHP agents are to convene over three days, from February 16th to 18th, at École Curé-Antoine-Labelle. We&apos;re counting on you!</p>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <p className={styles.info}>video intro</p>
                </div>
                <iframe className={styles.video} src="https://www.youtube.com/embed/XZcGbwce7fU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </>
    )
}


