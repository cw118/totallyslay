import { Footer } from "flowbite-react";
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Foooter = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const fr= currentRoute.includes('/fr') ? true : false;
  const spy = currentRoute.includes('/moohp') ? true : false;

  return (
    <Footer container={true} className={classNames('footer px-2 py-4 rounded-none sm:px-4', { 'font-spy': spy })}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href={spy ? (fr? '/fr/moohp' : '/moohp') : (fr? '/fr' : '/')}
            src={spy ? '/logo/moohp-logo.svg' : '/logo/mari-logo.svg'}
            alt={spy ? "MOOHP logo" : "M.A.R.I. logo"}
            name={spy ? "MOOHP" : "M.A.R.I."}
            className={classNames("flex justify-center md:block footerBrand", { 'invertedLogo': spy })}
          />
          <Footer.Copyright
            className='footerCopyright'
            href="https://github.com/cw118/totallyslay"
            by={fr ? 'Robotique Marianopolis. Site inspiré par Totally Spies!' : 'Marianopolis Robotics. Site inspired by Totally Spies!'}
            year={2023}
          />
        </div>
          
      </div>
    </Footer>
  );
}

export default Foooter;