import { Button } from "flowbite-react";
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const SchoolInfo = ({ fr }) => {
	const student = fr ? '/fr/etudiants' : '/students';
	const journal = fr ? '/fr/vie-etudiante' : '/student-life';
	
	return (
		<div className={styles.div}>
			<div className={styles.schoolContainer}>
				<p>
					{fr ? `L'institut de recherche académique de Marianopolis (M.A.R.I.) 
                        est un collège privé situé à Westmount, Montréal. 
                        Nous offrons une variété de programmes pré-universitaires
                        dans le domaine des sciences sociales, des sciences et des 
                        arts. Des certificats sont également offerts à nos étudiants pour reconnaître leurs 
                        implications dans les enjeux sociaux.`
						:
						`The Marianopolis Academic Research Institute (M.A.R.I.) is a
                        private english college located in Westmount, Montreal. We 
                        offer various pre-university programs in social sciences, sciences, 
                        and arts, as well as certificates that provide opportunities 
                        to our students to be involved in important social causes.`
					}
				</p><br />
				<p>
					{fr ? `Totalement M.A.R.I est une initiative menée par les étudiants du comité de développement web, dans le 
                        but de documenter l'année de graduation de la cohorte 2010. Toutes les images et vidéos ont été prises par 
                        les élèves. Les logos et les dessins sont inspirés par la série animée Totally Spies! et la CRC, dessinés 
                        par Victoria Hoang. Tous les modèles 3D sont faits par Adelina Badea et Andrea Abou-Haidar.`
						:
						`Totally M.A.R.I. is a student-led initiative run by the web development club in order to document the school 
                        year of the graduating class of 2010. All images and videos are taken by our student body. Logos and drawings 
                        based off of Totally Spies! and the CRC are by Victoria Hoang. All 3D models are by Adelina Badea and Andrea Abou-Haidar.
`
					}
				</p><br />
				<div>
					{fr ? `Tout le code est écrit par le comité du développement web sauf indication contraire. Pour accéder au code source, `
						  : `All code is by the web development club unless stated otherwise. To access our website's source code, `}
					<a target="_blank" href="https://github.com/cw118/totallyslay" rel="noopener noreferrer" className={styles.github}>
						{fr ? 'cliquez ici!' : 'click here!'}
					</a>
				</div>
			</div>
			<div className={styles.button}>
				<Link href={student}>
					<div className={styles.singleButton1}>
						<span className={styles.linkTitle}>{fr ? `Promotion '10` : `Class of '10`}</span>
						<img src="/members/MARI.JPG" alt={fr ? 'Photo de classe' : 'Class photo'} className={styles.linkImg} />
					</div>
				</Link><br />
				<Link href={journal}>
					<div className={styles.singleButton2}>
						<span className={styles.linkTitle}>{fr ? `Explorez la vie étudiante!` : `Explore Student Life!`}</span>
						<img src="/members/student-life.png" alt={fr ? 'Photo de deux dirigeantes de comité' : 'Photo of two club executives'} className={styles.linkImg} />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SchoolInfo;