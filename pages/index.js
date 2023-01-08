import Meta from '../components/Meta';
import Carouselle from "../components/home/Carousel";
import GameField from '../components/avia-robot/GameField';
import GamePiece from '../components/avia-robot/GamePiece';

export default function Home() {
  return (
    <>
      <Meta title='Home | M.A.R.I.' description='Welcome to the Marianopolis Academic Research Institute!' />
      <Carouselle />
      <GameField />
      <GamePiece />
    </>
  );
}
