import Meta from '../../../components/Meta';
import Puzzle from '../../../components/home/Puzzle';

export default function frMoohp() {
  return (
    <div className='bg-dark-purple'>
      <Meta title='Accueil | MOOHP' description="Bienvenue à l'Organisation Marianopolis pour la protection des humains!" />
      <Puzzle fr={true} />
    </div>
  );
}