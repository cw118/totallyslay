import {Carousel} from 'flowbite-react';
import styles from '../../styles/Home.module.css';

export default function Carouselle() {
    return(
        <>
        <div className={styles.slide}>
            <Carousel slideInterval={6000}>
                <img className="image"
                    src="/carousel/slide1.svg"
                    alt=""
                />
                <img 
                    src="/carousel/slide1.svg"
                    alt=""
                />
                <img 
                    src="/carousel/slide1.svg"
                    alt=""
                />
                <img 
                    src="/carousel/slide1.svg"
                    alt=""
                />
            </Carousel>
        </div>
        </>
    )
}


