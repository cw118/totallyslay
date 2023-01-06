import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SpyNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? 'fr' : '';

  return (
    <Navbar fluid={true} id='spyNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4 font-spy'>
      <Navbar.Toggle className='text-gray-100 hover:text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link
          href={lang ? currentRoute.replace('fr', '').replace('//', '/') : '/fr' + currentRoute}
        >
          {lang ? 'English' : 'Français'}
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp' : '/moohp'}
        >
          {lang ? 'Accueil' : 'Home'}
        </Navbar.Link>
        <Navbar.Link
          href={lang ? '/fr/moohp/avia' : '/moohp/avia'}
        >
          Avia
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href={lang ? '/fr/moohp' : '/moohp'} id='spyLogo' className='navLogo'>
          <img src='/logo/moohp-logo.svg' alt='MOOHP logo' />
        </Link>
        <Link href={lang ? '/fr' : '/'} id='hiddenRegLogo' className='navLogo'>
          <img src='/logo/mari-logo.svg' alt='M.A.R.I logo' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href={lang ? '/fr/moohp/agents' : '/moohp/agents'}>
          Agents
        </Navbar.Link>
        <Navbar.Link href={lang ? '/fr/moohp/journal' : '/moohp/journal'}>
          Journal
        </Navbar.Link>
        <Navbar.Link href={lang ? '/fr/moohp/robot' : '/moohp/robot'}>
          Robot
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SpyNav;