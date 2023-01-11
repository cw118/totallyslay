import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SpyNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? true : false;

  const linkCounterparts = {
    '/moohp': '/fr/moohp',
    '/fr/moohp': '/moohp',
    '/moohp/agents': '/fr/moohp/agents',
    '/fr/moohp/agents': '/moohp/agents',
    '/moohp/archives': '/fr/moohp/archives',
    '/fr/moohp/archives': '/moohp/archives',
    '/moohp/avia': '/fr/moohp/avia',
    '/fr/moohp/avia': '/moohp/avia',
    '/moohp/robot': '/fr/moohp/gadget',
    '/fr/moohp/gadget': '/moohp/robot',
  }

  return (
    <Navbar fluid={true} id='spyNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4 font-spy'>
      <Navbar.Toggle className='text-gray-100 hover:text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link href={linkCounterparts[currentRoute]}>
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
        <div id='spyLogo' className='navLogo'>
          <img src='/logo/moohp-logo.svg' alt={lang ? 'Logo de MOOHP' : 'MOOHP logo'} />
        </div>
        <Link href={lang ? '/fr' : '/'} id='hiddenRegLogo' className='navLogo'>
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
          href={lang ? '/fr/moohp/gadget' : '/moohp/robot'}
          className={(currentRoute === '/moohp/robot' || currentRoute === '/fr/moohp/gadget') ? 'navActive' : ''}>
          {lang ? 'Gadget' : 'Robot'}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SpyNav;