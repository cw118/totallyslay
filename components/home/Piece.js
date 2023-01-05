import { useDrag, useDrop } from 'react-dnd';
import styles from '../../styles/Moohp.module.css';

const Piece = ({ id, newPos, onDropPiece, handleDrag, forceUpdate }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PIECE',
    item: { newPos },
  }));

  const [{ isOver }, dropRef] = useDrop({
    accept: 'PIECE',

    drop: () => {
      onDropPiece(newPos);
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver()
      }
    }
  });

  return (
    <div ref={dropRef} className={`${newPos} ` + `${styles.piece}`}>
      <div ref={drag} id={newPos} style={{ opacity: isDragging ? 0.7 : 1 }} className={id} onDragStart={handleDrag} onDragEnd={forceUpdate}></div>
    </div>
  )
}

export default Piece;
