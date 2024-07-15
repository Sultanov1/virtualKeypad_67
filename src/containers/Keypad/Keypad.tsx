import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addNumber, checkPin, removeNumber} from './pinSlice';

const Keypad = () => {
  const {asterisk, isValid, checked} = useSelector((state: RootState) => state.pin);
  const dispatch = useDispatch();

  return (
    <div className={`keypad ${checked && (isValid ? 'valid' : 'invalid')}`}>
      <div className="display">
        {asterisk.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(number => (
          <button key={number} onClick={() => dispatch(addNumber(number))}>{number}</button>
        ))}
        <button onClick={() => dispatch(removeNumber())}>{'<'}</button>
        <button onClick={() => dispatch(addNumber('0'))}>0</button>
        <button onClick={() => dispatch(checkPin())}>{'E'}</button>
      </div>
      {checked && (
        <div className='message'>
          {isValid ? 'Access Granted' : 'Access Denied'}
        </div>
      )}
    </div>
  );
};

export default Keypad;