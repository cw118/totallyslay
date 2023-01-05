import Meta from './Meta';
import RegNav from './RegNav';
import SpyNav from './SpyNav';
import Foooter from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const spy = currentRoute.includes('/moohp') ? true : false;

  return (
    <>
      <Meta />
      {spy ? <SpyNav /> : <RegNav />}
      {children}
      <Foooter />
    </>
  )
}

export default Layout;