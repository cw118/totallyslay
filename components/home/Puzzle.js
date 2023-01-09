import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import PuzzlePiece from './PuzzlePiece';
import styles from '../../styles/Moohp.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';

// force update hook from https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442
// forces rerender after dragend of a puzzle piece to show updated puzzle after pieces swap places
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}
// end of force update hook

const Puzzle = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? true : false;

  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const ids = ['one', 'two', 'three', 'four'];
  const solved = ['pOne', 'pTwo', 'pThree', 'pFour'];
  let initial = ['pThree', 'pOne', 'pFour', 'pTwo'];

  const [positions, setPositions] = useState(initial);

  const forceUpdate = useForceUpdate();

  const isSolved = (current) => {
    // Check that the current positions array is equal to the solved positions array
    for (let i = 0; i < current.length; ++i) {
      if (current[i] !== solved[i]) return false;
    }
    return true;
  }

  const handleSolve = () => setPuzzleSolved(true);
  
  const hidePuzzleScreen = () => setRevealed(true);

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
      handleSolve();
    }
  };

  return (
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
      <h3 className={classNames('puzzleHint', { 'fade': puzzleSolved })}>{lang ? 'Résoudre la casse-tête!' : 'Solve the puzzle!'}<br />{lang ? 'Effectuez un appui long sur une pièce pour la bouger' : 'Press and hold a puzzle piece to drag'}</h3>
      <h3 className={classNames('puzzleHintLeft', { 'fade': puzzleSolved })}>{lang ? 'Résoudre la casse-tête!' : 'Solve the puzzle!'}</h3><h3 className={classNames('puzzleHintRight', { 'fade': puzzleSolved })}>{lang ? 'Effectuez un appui long sur une pièce pour la bouger' : 'Press and hold a puzzle piece to drag'}</h3>

      <DndProvider backend={HTML5Backend}>
        <div className={classNames('puzzle', { 'fade': puzzleSolved })}>
          {positions.map((pos, index) => (
        <PuzzlePiece key={index} id={ids[index]} newPos={pos} onDropPiece={onDropPiece} handleDrag={handleDrag} forceUpdate={forceUpdate} />
          ))}
        </div>
      </DndProvider>
    </div>
  );

}

export default Puzzle;