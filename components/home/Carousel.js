import {Carousel} from 'flowbite-react';
import styles from '../../styles/Home.module.css';

 export default function Carouselle({ fr }) {
   return (
     <>
       <div className={styles.container}>
         <Carousel slideInterval={6000}>
           <div className={styles.slide1}>
             <h1 className={styles.header1}>{fr ? 'Portes ouvertes 2023' : 'Open House 2023'}</h1>
             <p className={styles.text1}>{fr ? 'L\'Institut de recherche académique de Marianopolis (M.A.R.I) est ravi d\'accueillir les futurs étudiants aux portes ouvertes 2023.' : 'The Marianopolis Academic Research Institute is thrilled to invite prospective students and their families to our 2023 open house.'}</p>
             <p className={styles.text1}>{fr ? 'Découvrez M.A.R.I. et sa communauté et informez-vous sur le programme que vous voulez choisir.' : 'Discover M.A.R.I., meet our community, and get all the information you need to choose the best program for you.'}</p>
           </div>
           <div className={styles.slide2}>
             <h1 className={styles.header2}>{fr ? 'Foire aux comités' : 'Join-A-Club Day'}</h1>
             <p className={styles.text2}>{fr ? 'M.A.R.I offre une grande variété de comités diversifiés pour leurs étudiants!' : 'M.A.R.I. offers a wide selection of clubs to the student body!'}<br></br><br></br>
               {fr ? 'Rencontrez le comité de film, de développement web, de construction, de programmation et Arduino.' : 'Get to know the robot builders club, the programming club, the website club, the kiosk club, the film club, and many more.'}<br></br><br></br>
               {fr ? 'Inscrivez-vous au bureau de Jerriella.' : 'Sign up in Jerriella\'s office.'}</p>
           </div>
           <div className={styles.slide3}>
             <h1 className={styles.header3}>{fr ? 'Visionnage de Totally Spies! ce vendredi' : 'TUNE IN: Totally Spies! Screening This Friday'}</h1>
             <p className={styles.text3}>{fr ? 'Trois adolescentes de Beverly Hills - Alex, Clover et Sam - tentent de balancer leur vie en tant qu\'étudiante du secondaire et agent d\'infiltration, combattant une variété de criminels étranges.' : 'Three teenage girls from Beverly Hills – Alex, Clover, and Sam – attempt to balance their lives as high school students with their undercover work as super spies at WOOHP, battling a variety of bizarre criminals.'}</p>
           </div>                
         </Carousel>
       </div>
     </>
   );
} 
