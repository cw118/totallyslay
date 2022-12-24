import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Piece from './Piece';

// force update hook from https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442
// forces rerender after dragend of a puzzle piece to show updated puzzle after pieces swap places
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here 
  // is better than directly setting `value + 1`
}
// end of force update hook

const Puzzle = () => {
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

  const handleSolve = () => {
    console.log('solved'); // temporary, to be replaced by spy page reveal
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

    // if puzzle is solved, "quit"
    if (isSolved(positions)) {
      handleSolve();
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='puzzle'>
        {positions.map((pos, index) => (
      <Piece key={index} id={ids[index]} newPos={pos} onDropPiece={onDropPiece} handleDrag={handleDrag} forceUpdate={forceUpdate} />
        ))}
      </div>
    </DndProvider>
  );

}

export default Puzzle;