import { Carousel } from 'antd';
import styles from '../../styles/Home.module.css';

export default function Carouselle({fr}) {
    const el = {backgroundColor: "#F6F1D6"}
    const list = [
        {bg: "#F6F1D6", colourSlide: "#F6EBC3", colourHeader: "#FE5F00", border: 0,
            header: fr ? 'Portes ouvertes 2023' : 'Open House 2023', 
            text1: fr ? `L'Institut de recherche académique de Marianopolis (M.A.R.I) est ravi d'accueillir 
                les futurs étudiants aux portes ouvertes 2023.`: 
                `The Marianopolis Academic Research Institute is thrilled to invite prospective students 
                and their families to our 2023 open house.`, 
            text2: fr ? `Découvrez M.A.R.I. et sa communauté et informez-vous sur le programme que vous voulez choisir.`: 
                `Discover M.A.R.I., meet our community, and get all the information you need to choose the best program for you.`,
            text3: ""
        },
        {bg: "#FFC8C8", colourSlide: "#FDDCB5", colourHeader: "#ff74a3", border: 0, 
            header: fr ? 'Foire aux comités' : 'Join-A-Club Day', 
            text1: fr ? 'M.A.R.I offre une grande variété de comités diversifiés pour leurs étudiants!': 
                'M.A.R.I. offers a wide selection of clubs to the student body!', 
            text2: fr ? `Rencontrez le comité de film, de développement web, de construction, de programmation et Arduino.` : 
                `Get to know the robot builders club, the programming club, the website club, the kiosk club, the film club, and many more.`,
            text3: fr ? 'Inscrivez-vous au bureau de Jerriella.' : `Sign up in Jerriella's office.`
        },
        {bg: "#F4C6E4", colourSlide: "#D4BFF5", colourHeader: "#b251ea", border: 75, 
            header: fr ? 'Visionnage de Totally Spies! ce vendredi' : 'TUNE IN: Totally Spies! Screening This Friday', 
            text1: fr ? `Trois adolescentes de Beverly Hills - Alex, Clover et Sam - tentent de balancer leur vie en tant 
                qu'étudiante du secondaire et agent d'infiltration, combattant une variété de criminels étranges.`:
                `Three teenage girls from Beverly Hills – Alex, Clover, and Sam – attempt to balance their lives as 
                high school students with their undercover work as super spies at WOOHP, battling a variety of bizarre criminals.`, 
            text2: "",
            text3: ""
        }
    ]

    return(
        <Carousel>
            {list.map((slide, index) => {
                return (
                    <div className={styles.center}>
                        <div className={styles.slide1} style={{backgroundColor: slide.bg, borderRadius: slide.border}}>
                            <div className={styles.slide1_1} style={{backgroundColor: slide.colourSlide, borderRadius: slide.border}}>
                                <h1 className={styles.header1} style={{color: slide.colourHeader}}>
                                    {slide.header}
                                </h1>
                                <p className={styles.text1}>
                                    {slide.text1}
                                </p>
                                <p className={styles.text1}>
                                    {slide.text2}
                                </p>
                                <p className={styles.text1}>
                                    {slide.text3}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Carousel>
  );
}