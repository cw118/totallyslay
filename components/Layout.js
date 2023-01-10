import Meta from './Meta';
import RegNav from './nav/RegNav';
import SpyNav from './nav/SpyNav';
import RegNavFr from './nav/RegNavFr';
import Foooter from './Footer';
import JerryPopUp from './JerryPopUp';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? true : false;
  const spy = currentRoute.includes('/moohp') ? true : false;
  const reg = !spy;

  return (
    <>
      <Meta icon={spy ? '/favicon/moohp-icon.svg' : '/favicon/mari-icon.svg'} />
      {spy ? <SpyNav /> : (lang ? <RegNavFr /> : <RegNav />)}
      <div className={classNames('mainContent', { 'font-spy bg-dark-purple': spy, ' flowerBg': reg })}>{children}</div>
      {spy ?? <JerryPopUp lang={lang} />}
      <Foooter />
    </>
  );
}

export default Layout;