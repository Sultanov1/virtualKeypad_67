import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addNumber} from './pinSlice';

const Keypad = () => {
  const {asterisk} = useSelector((state: RootState) => state.pin);
  const dispatch = useDispatch();

  return (
    <div className="keypad">
      <div className="display">
        {asterisk.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(number => (
          <button key={number} onClick={() => dispatch(addNumber(number))}>{number}</button>
        ))}
        <button>{'<'}</button>
        <button>0</button>
        <button>{'E'}</button>
      </div>
    </div>
  );
};

export default Keypad;