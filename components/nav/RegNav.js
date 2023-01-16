import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const RegNav = () => {
  const [showLogo, setShowLogo] = useState(false); // show (reveal) hidden logo
  const [hideLogo, setHideLogo] = useState(false); // hide (cover) hidden logo, start with falsy value to avoid animation on initial render
  const [paused, setPaused] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  const fr= currentRoute.includes('/fr') ? true : false;

  const linkCounterparts = {
    '/': '/fr',
    '/student-life': '/fr/vie-etudiante',
    '/students': '/fr/etudiants',
    '/fr': '/',
    '/fr/vie-etudiante': '/student-life',
    '/fr/etudiants': '/students',
  }

  const pause = () => setPaused(true);
  const play = () => setPaused(false);

  const revealLogo = () => {
    setShowLogo(true);
    setHideLogo(false);
    play();
  }

  const coverLogo = () => {
    setShowLogo(false);
    setHideLogo(true);
    play();
  }

  return (
    <Navbar fluid={true} id='regNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link href={linkCounterparts[currentRoute]}>{fr? 'English' : 'Français'}</Navbar.Link>
        <Navbar.Link href={fr? '/fr' : '/'} className={currentRoute === '/' || currentRoute === '/fr' ? 'navActive' : ''}>{fr? 'Accueil' : 'Home'}</Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href={fr? '/fr' : '/'} id='regLogo' className={classNames('navLogo', { 'showLogo': showLogo, 'hideLogo': hideLogo, 'pause': paused })} onMouseOver={revealLogo} onTouchStart={revealLogo} onMouseLeave={pause} onTouchEnd={pause}>
          <img src='/logo/mari-logo.svg' alt='M.A.R.I Logo' />
        </Link>
        <Link href={fr? '/fr/moohp' : '/moohp'} id='hiddenLogo' className='navLogo' onMouseOver={play} onTouchStart={play} onMouseLeave={coverLogo} onTouchEnd={coverLogo}>
          <img src='/logo/moohp-logo.svg' alt='MOOHP logo' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href={fr? '/fr/etudiants' : '/students'} className={currentRoute === '/students' || currentRoute === '/fr/etudiants' ? 'navActive' : ''}>{fr? 'Étudiants' : 'Students'}</Navbar.Link>
        <Navbar.Link href={fr? '/fr/vie-etudiante' : '/student-life'} className={currentRoute === '/student-life' || currentRoute === '/fr/vie-etudiante' ? 'navActive' : ''}>{fr? 'Vie étudiante' : 'Student Life'}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RegNav;