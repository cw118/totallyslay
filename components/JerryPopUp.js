import { useState } from 'react';
import Link from 'next/link';
import { Tooltip } from 'flowbite-react';

const JerryPopUp = ({ fr }) => {
	const [show, setShow] = useState(true);

	const handleShow = () => {
		setShow(!show);
	}

	return (
		<>
			<div className={'jerryPopUp' + (show ? ' activePopUp' : '')} onClick={handleShow} />
			<div className={'popUpTooltip font-spy' + (show ? '' : ' noOpacity invisible')}>
				{/* using a div for the text because <Tooltip> renders as a div, and a <div> within a <p> is invalid
            HTML (i.e. <p><div></div></p>), which also causes a hydration error */}
				<div>
					<Tooltip content={fr ? 'Cliquez sur le texte/lien souligné!' : 'Click on the underlined text/link!'}
						style='light' placement='bottom'>{fr ? 'Appel à tous les agents de MOOHP! ' : 'Calling all MOOHP agents! '}
						<Link href={fr ? '/fr/moohp' : '/moohp'} className='popUpLink'>
							{fr ? 'Réunissez au siège de MOOHP, une nouvelle tâche importante vous attend!' :
								'Please convene at MOOHP headquarters, a new important task awaits!'}
						</Link>
					</Tooltip>
				</div>
			</div>
		</>
	);
}

export default JerryPopUp;
