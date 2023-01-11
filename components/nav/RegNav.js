import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? true : false;

  const linkCounterparts = {
    '/': '/fr',
    '/journal': '/fr/journal',
    '/students': '/fr/etudiants',
    '/fr': '/',
    '/fr/journal': '/journal',
    '/fr/etudiants': '/students',
  }

  return (
    <Navbar fluid={true} id='regNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link href={linkCounterparts[currentRoute]}>{lang ? 'English' : 'Français'}</Navbar.Link>
        <Navbar.Link href={lang ? '/fr' : '/'} className={currentRoute === '/' || currentRoute === '/fr' ? 'navActive' : ''}>{lang ? 'Accueil' : 'Home'}</Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href={lang ? '/fr' : '/'} id='regLogo' className='navLogo'>
          <img src='/logo/mari-logo.svg' alt='M.A.R.I Logo' />
        </Link>
        <Link href={lang ? '/fr/moohp' : '/moohp'} id='hiddenLogo' className='navLogo'>
          <img src='/logo/moohp-logo.svg' alt='MOOHP logo' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href='/students' className={currentRoute === '/students' || currentRoute === '/fr/etudiants' ? 'navActive' : ''}>{lang ? 'Étudiants' : 'Students'}</Navbar.Link>
        <Navbar.Link href='/journal' className={currentRoute === '/journal' || currentRoute === '/fr/journal' ? 'navActive' : ''}>Journal</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RegNav;