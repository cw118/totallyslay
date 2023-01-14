import { useState } from 'react';
import useSessionStorage from '../Storage';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';
import styles from '../../styles/Moohp.module.css';
import classNames from 'classnames';
import MoohpHero from './MoohpHero';
import MoohpIntro from './MoohpIntro';
import { Button } from 'flowbite-react';
import Link from 'next/link';

// force update hook from https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442
// forces rerender after 'dragend' of a puzzle piece to show updated puzzle after pieces swap places
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}
// end of force update hook

const Puzzle = ({ fr }) => {
  /* Store booleans for whether puzzle is solved and moohp homepage is revealed
   * in sessionStorage to persist state after refresh (N.B. sessionStorage is cleared
   * after closing the tab, and is stored for a single tab at a time) 
  */
  const [puzzleSolved, setPuzzleSolved] = useSessionStorage('puzzleSolved', false);
  const [revealed, setRevealed] = useSessionStorage('moohpRevealed', false);

  // Setup dismiss puzzle instructions (onClick)
  const [dismissed, setDismissed] = useState(false); // for fade out
  const [hide, setHide] = useState(false); // for setting display: none to avoid blocking interactions w/ puzzle pieces

  // Initialize puzzle: position and styling (id) of each piece
  // positions of pieces are saved/detected as arrays
  const ids = ['one', 'two', 'three', 'four'];
  const solved = ['pOne', 'pTwo', 'pThree', 'pFour'];
  const initial = ['pThree', 'pOne', 'pFour', 'pTwo'];

  const [positions, setPositions] = useState(initial);

  const forceUpdate = useForceUpdate();

  const isSolved = (current) => {
    // Check that the current positions array is equal to the solved positions array
    for (let i = 0; i < current.length; ++i) {
      if (current[i] !== solved[i]) return false;
    }
    return true;
  }

  const [sourcePos, setsourcePos] = useState('');

  const handleDrag = (e) => {
    setsourcePos(e.target.id); // get the old position of the dragged piece
  }

  const onDropPiece = (dropPos) => {
    let newPositions = positions;
    const oldIndex = newPositions.indexOf(sourcePos);
    const newIndex = newPositions.indexOf(dropPos);

    // swap places of the pieces (dragged piece position => position of piece on which it was dropped, and vice versa)
    [newPositions[oldIndex], newPositions[newIndex]] = [newPositions[newIndex], newPositions[oldIndex]];

    setPositions(newPositions);

    if (isSolved(positions)) {
      setPuzzleSolved(true);
    }
  };

  const hidePuzzleScreen = () => setRevealed(true);

  return (
    <>
      <div className={classNames(styles.puzzleArea, { ' hide': revealed })}>
        <div className={classNames(styles.door, {
          'revealLeft': puzzleSolved,
        })} id={styles.leftDoor}>
          <div className={styles.doorLogoContainer}>
            <div id={styles.leftLogo}></div>
          </div>
        </div>
        <div className={classNames(styles.door, {
          'revealRight': puzzleSolved,
        })} id={styles.rightDoor} onAnimationEnd={hidePuzzleScreen}>
          <div className={styles.doorLogoContainer}>
            <div id={styles.rightLogo}></div>
          </div>
        </div>
        <div className={classNames('puzzleHint', { 'fade': dismissed, 'hide': hide })} onAnimationEnd={() => setHide(true)} onClick={() => setDismissed(true)}>
          <h3><strong>{fr ? 'Appuyez sur une pièce du casse-tête pendant 2 à 3 secondes, puis glissez et déposez-la sur une autre pièce pour échanger leurs places' : 'Hold a puzzle piece for 2–3 seconds, then drag and drop on another piece to swap their places'}</strong></h3>
          <h3><i>{fr ? 'Appuyez sur ce message pour le cacher' : 'Tap on this message to dismiss'}</i></h3>
        </div>
        <div className={classNames('puzzleHintMouse', { 'fade': dismissed, 'hide': hide })} onAnimationEnd={() => setHide(true)} onClick={() => setDismissed(true)}>
          <h3><strong>{fr ? 'Cliquez sur une pièce du casse-tête, puis glissez et déposez-la sur une autre pièce pour échanger leurs places' : 'Click on a puzzle piece, then drag and drop on another piece to swap their places'}</strong></h3>
          <h3><i>{fr ? 'Cliquez sur ce message pour le cacher' : 'Click on this message to dismiss'}</i></h3>
        </div>

        <DndProvider backend={HTML5Backend}>
          <div className={classNames('puzzle', { 'fade': puzzleSolved })}>
            {positions.map((pos, index) => (
              <PuzzlePiece key={index} id={ids[index]} newPos={pos} onDropPiece={onDropPiece} handleDrag={handleDrag} forceUpdate={forceUpdate} />
            ))}
          </div>
        </DndProvider>
        <Button
          outline={true}
          gradientDuoTone="purpleToBlue"
          className={classNames('puzzleChangeLang', { 'hide': puzzleSolved })}
        >
          <Link href={fr ? '/moohp' : '/fr/moohp'}>{fr ? 'English' : 'Français'}</Link>
        </Button>
      </div>
      
      {/* hide actual page until the puzzle is solved */}
      <div className={puzzleSolved ? '' : 'screenCover'}></div>
      <div className={puzzleSolved ? '' : 'hide'}>
        <MoohpHero />
        <MoohpIntro fr={fr} />
      </div>
    </>
  );

}

export default Puzzle;