import Meta from '../../../components/Meta';
import Puzzle from '../../../components/home/Puzzle';
import MoohpHero from '../../../components/home/MoohpHero';
import { MoohpIntroFr } from '../../../components/home/MoohpIntro';

export default function frMoohp() {
  return (
    <div className='bg-dark-purple'>
      <Meta title='Accueil | MOOHP' description="Bienvenue à l'Organisation Marianopolis pour la protection des humains!" />
      <Puzzle />
      <MoohpHero />
      <MoohpIntroFr />
    </div>
  );
}