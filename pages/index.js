import Meta from '../components/Meta';
import Carouselle from "../components/home/Carousel";
import Testimonial from '../components/home/Testimonial';
import SchoolInfo from "../components/home/SchoolInfo";

export default function Home() {
  return (
    <>
      <Meta title='Home | M.A.R.I.' description='Welcome to the Marianopolis Academic Research Institute!' />
      <Carouselle />
      <SchoolInfo />
      <Testimonial />
    </>
  );
}
