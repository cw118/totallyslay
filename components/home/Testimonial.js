import styles from '../../styles/Home.module.css';

const Testimonial = () => {
    return(
        <div className={styles.testimonialContainer}>
            <div className={styles.testText}>
                <p className={styles.quote}>I am forever grateful for the Marianopolis Academic Research Institute for always embracing the intersection of various fields. I believe that the institute&apos;s push for extracurricular activities is at the core of the success of its student body. The values and ethics I&apos;ve adopted from my years at M.A.R.I. highly influence how I run MOOHP today. </p>
                <p className={styles.name}>Jared Lewis, M.A.R.I. Alumni & MOOHP Founder</p>
            </div>
            <img 
                src="/testimonial/jared.svg"
                alt="Jared, M.A.R.I. alumni"
                className={styles.jared}
            />
        </div>
    );
}

export default Testimonial;