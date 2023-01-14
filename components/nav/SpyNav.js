import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const SpyNav = () => {
  const [showLogo, setShowLogo] = useState(false); // show (reveal) hidden logo
  const [hideLogo, setHideLogo] = useState(false); // hide (cover) hidden logo, start with falsy value to avoid animation on initial render
  const [paused, setPaused] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? true : false;

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
    <Navbar fluid={true} id='spyNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4 font-spy'>
      <Navbar.Toggle className='text-gray-100 hover:text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link href={lang ? currentRoute.replace('fr', '').replace('//', '/') : '/fr' + currentRoute}>
          {lang ? 'English' : 'Français'}
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp' : '/moohp'}
          className={(currentRoute === '/moohp' || currentRoute === '/fr/moohp') ? 'navActive' : ''}>
          {lang ? 'Accueil' : 'Home'}
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp/avia' : '/moohp/avia'}
          className={(currentRoute === '/moohp/avia' || currentRoute === '/fr/moohp/avia') ? 'navActive' : ''}
        >
          Avia
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <div id='spyLogo' className={classNames('navLogo', { 'showLogoTwo': showLogo, 'hideLogoTwo': hideLogo, 'pause': paused })} onMouseOver={revealLogo} onTouchStart={revealLogo} onMouseLeave={pause} onTouchEnd={pause}>
          <img src='/logo/moohp-logo.svg' alt={lang ? 'Logo de MOOHP' : 'MOOHP logo'} />
        </div>
        <Link href={lang ? '/fr' : '/'} id='hiddenRegLogo' className='navLogo' onMouseOver={play} onTouchStart={play} onMouseLeave={coverLogo} onTouchEnd={coverLogo}>
          <img src='/logo/mari-logo.svg' alt={lang ? 'Logo de M.A.R.I.' : 'M.A.R.I logo'} />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link
          href={lang ? '/fr/moohp/agents' : '/moohp/agents'}
          className={(currentRoute === '/moohp/agents' || currentRoute === '/fr/moohp/agents') ? 'navActive' : ''}>
          Agents
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp/archives' : '/moohp/archives'}
          className={(currentRoute === '/moohp/archives' || currentRoute === '/fr/moohp/archives') ? 'navActive' : ''}>
          Archives
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp/robot' : '/moohp/robot'}
          className={(currentRoute === '/moohp/robot' || currentRoute === '/fr/moohp/robot') ? 'navActive' : ''}>
          Robot
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SpyNav;