import { useState } from 'react';
import Link from 'next/link';

const JerryPopUp = ({ lang }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <div className={'jerryPopUp' + (show ? ' activePopUp' : '')} onClick={handleShow}></div>
      <div className={'popUpTooltip font-spy' + (show ? '' : ' noOpacity invisible')}>
        <p>{lang ? 'Appel à tous les agents de MOOHP! Réunissez au' : 'Calling all MOOHP agents! Please convene at'} <Link href={lang ? '/fr/moohp' : '/moohp'} className='popUpLink'>{lang ? 'siège de MOOHP, une nouvelle tâche importante vous attend!' : 'MOOHP headquarters, a new important task awaits!'}</Link></p>
      </div>
    </>
  );
}

export default JerryPopUp;