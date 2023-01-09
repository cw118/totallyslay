import Meta from '../../components/Meta';
import Puzzle from '../../components/home/Puzzle';
import MoohpHero from '../../components/home/MoohpHero';
import { MoohpIntro } from '../../components/home/MoohpIntro';

export default function moohp() {
  return (
    <>
      <Meta title='Home | MOOHP' description='Welcome to the Marianopolis Organization of Human Protection' />
      <Puzzle />
      <MoohpHero />
      <MoohpIntro />
    </>
  );
}