import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegNavFr = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const enCounterparts = {
    '/fr': '/',
    '/fr/journal': '/journal',
    '/fr/etudiants': '/students',
  }

  return (
    <Navbar fluid={true} id='regNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link href={enCounterparts[`${currentRoute}`]}>English</Navbar.Link>
        <Navbar.Link href='/fr' className={currentRoute === '/fr' ? 'navActive' : ''}>Accueil</Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href='/fr' id='regLogo' className='navLogo'>
          <img src='/logo/mari-logo.svg' alt='Logo de M.A.R.I' />
        </Link>
        <Link href='/fr/moohp' id='hiddenLogo' className='navLogo'>
          <img src='/logo/moohp-logo.svg' alt='Logo de MOOHP' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href='/fr/etudiants' className={currentRoute === '/fr/etudiants' ? 'navActive' : ''}>Étudiants</Navbar.Link>
        <Navbar.Link href='/fr/journal' className={currentRoute === '/fr/journal' ? 'navActive' : ''}>Journal</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RegNavFr;