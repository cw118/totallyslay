import {Carousel} from 'flowbite-react';
import styles from '../../styles/Home.module.css';

 export default function Carouselle() {
   return (
     <>
       <div className={styles.container}>
         <Carousel slide={false}>
           <div className={styles.slide1}>
             <h1 className={styles.header1}>Open House 2023</h1>
             <p className={styles.text1}>The Marianopolis Academic Research Institute is thrilled to invite prospective students and their families to our 2023 open house.</p>
             <p className={styles.text1}>Discover M.A.R.I., meet our community, and get all the information you need to make the best decision about which program to choose.</p>
           </div>
           <div className={styles.slide2}>
             <h1 className={styles.header2}>Join-A-Club Day</h1>
             <p className={styles.text2}>M.A.R.I. offers a wide selection of clubs to the student body!<br></br><br></br>
               Get to know the robot builders club, the programming club, the website club, the kiosk club, the film club, and many more.<br></br><br></br>
               Sign up in Jerriella’s office</p>
           </div>
           <div className={styles.slide3}>
             <h1 className={styles.header3}>TUNE IN: Totally Spies Screening This Friday</h1>
             <p className={styles.text3}>Three teenage girls from Beverly Hills – Alex, Clover, and Sam – attempt to balance their lives as high school students with their undercover work as super spies at WOOHP, battling a variety of bizarre criminals.</p>
           </div>
           
                
         </Carousel>
       </div>
     </>
   );
} 

/*
export default function Carouselle() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false}>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 3
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 4
                </div>
            </Carousel>
        </div>
    )
}
*/

//add two classnames for div parts slide and slide1 to clean up css
// public/carousel/slide2.svg ...
// ask carolyn to remove the font in global css

//add slideInterval={6000} when done to <Carousel>


