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
        <p>{lang ? 'Cher agent, vous avez été recruté pour une mission d\'espionnage ultra confidentielle par la CRC! ' : 'Greetings agent, you have been recruited for a top-secret spy mission by the CRC!'} <Link href={lang ? '/fr/moohp' : '/moohp'} className='popUpLink'>{lang ? 'Cliquez/tapez ici pour commencer.' : 'Click/tap here to begin.'}</Link></p>
      </div>
    </>
  );
}

export default JerryPopUp;