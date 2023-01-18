import Meta from '../../components/Meta';
import Carouselle from "../../components/home/Carousel";
import Testimonial from '../../components/home/Testimonial';
import Info from "../../components/home/SchoolInfo"

export default function Accueil() {
  return (
    <>
      <Meta title='Accueil | M.A.R.I.' description="Bienvenue à l'Institut de recherche académique de Marianopolis!" />
      <Carouselle fr={true} />
      <Info fr={true} />
      <Testimonial fr={true} />
    </>
  );
}