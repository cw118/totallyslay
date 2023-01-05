import {Carousel} from 'flowbite-react';
import styles from '../../styles/Home.module.css';

export default function Carouselle() {
    return(
        <>
        <div className={styles.container}>
            <Carousel leftControl="slay" rightControl="unslay">
                <div className={styles.slide1}>
                    <h1>Open House 2023</h1>
                    <p>blablablablablablab</p>
                </div>
                <div className={styles.slide2}>
                    <h1>Open House 2023</h1>
                    <p>blablablablablablab</p>
                </div>
                
            </Carousel>
</div>
        </>
    )
}

//add two classnames for div parts slide and slide1 to clean up css


