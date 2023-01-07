import { useState } from 'react';
import Link from 'next/link';

const JerryPopUp = ({ lang }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <div className='jerryPopUp' onClick={handleShow}></div>
      <div className={'popUpTooltip font-spy' + (show ? '' : ' noOpacity')}>
        <p>{lang ? '(traduction en français)' : 'Greetings agent, you have been recruited for a top-secret spy mission by the CRC!'} <Link href={lang ? '/fr/moohp' : '/moohp'} className='popUpLink'>{lang ? 'Cliquez/appuyez ici pour commencer.' : 'Click/tap here to begin.'}</Link></p>
      </div>
    </>
  );
}

export default JerryPopUp;