import {Button} from "flowbite-react"
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Info({fr}) {
    const student = fr ? '/fr/etudiants': '/students'
    const journal = fr ? '/fr/vie-etudiante': '/student-life'
    return(
        <div className={styles.div}>
            <div className={styles.schoolContainer}>
                <p>
                    {fr ? `L'institut de recherche académique de Marianopolis (M.A.R.I.) 
                        est un collège privé situé à Westmount, Montréal. 
                        Nous offrons une variété de programmes pré-universitaires
                        dans le domaine des sciences sociales, des sciences et des 
                        arts. Des certificats sont également offerts à nos étudiants pour reconnaître leurs implications dans les enjeux sociaux."` 
                        :
                        `The Marianopolis Academic Research Institute (M.A.R.I.) is a
                        private english college located in Westmount, Montreal. We 
                        offer various pre-university programs in social sciences, sciences, 
                        and arts, as well as certificates that provide opportunities 
                        to our students to be involved in important social causes.`
                        
                    } 
                </p>
            </div>
            <div className={styles.button}>
                    <Link href={student}>
                        <Button className={styles.singleButton1}>
                            <span className={styles.linkTitle}>{fr ? `Promotion 2023` : `Class of 2023`}</span>
                            <img src="/members/MARI.JPG" alt="M.A.R.I. school picture" className={styles.linkImg}></img>
                        </Button>
                    </Link><br></br>
                    <Link href={journal}>
                        <Button className={styles.singleButton2}>
                            <span className={styles.linkTitle}>{fr ? `Explorez la vie étudiante!` : `Explore Student Life!`}</span>
                            <img src="/members/student-life.png" alt="M.A.R.I. school picture" className={styles.linkImg}></img>
                        </Button>
                    </Link>
            </div>
        </div>
    )
}