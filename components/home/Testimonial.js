import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Testimonial = ({ fr }) => {
	return (
		<div className={styles.testimonialContainer}>
			<div className={styles.testimonialText}>
				<p className={styles.quote}>&ldquo;{fr ? 'Je serai toujours reconnaissant envers l\'Institut de recherche académique de Marianopolis pour encourager l\'interdisciplinarité. L\'Institut encourage fortement ses élèves à participer aux activités parascolaires offertes et d\'après moi, ceci est la principale raison du succès de ses élèves. Les valeurs que j\'ai apprises pendant mes années à M.A.R.I. ont influencé la manière dont je gère MOOHP.' : 'I am forever grateful for the Marianopolis Academic Research Institute for always embracing the intersection of various fields. I believe that the institutes push for extracurricular activities is at the core of the success of its student body. The values and ethics I\'ve adopted from my years at M.A.R.I. highly influence how I run MOOHP today.'}&rdquo;</p>
				<p className={styles.name}>{fr ? 'Jared Lewis, ancien élève de M.A.R.I. et ' : 'Jared Lewis, M.A.R.I. Alumni & '}<Link className={styles.hintLink} href={fr ? '/fr/moohp' : '/moohp'}>{fr ? 'vice-président de MOOHP' : 'MOOHP Vice President'}</Link></p>
			</div>
			<img 
					src="/testimonial/jared.svg"
					alt={fr ? 'Image de Jared Lewis' : 'Picture of Jared Lewis'}
					className={styles.jared}
			/>
		</div>
	);
}

export default Testimonial;