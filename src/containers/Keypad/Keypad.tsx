const Keypad = () => {
  return (
    <div className='keypad'>
      <div className='display'>
        <span>123..</span>
      </div>
      <div className='buttons'>
        {['1','2','3','4','5','6','7','8','9'].map(number => (
          <button key={number}>{number}</button>
        ))}
        <button>{'<'}</button>
        <button>0</button>
        <button>{'E'}</button>
      </div>
    </div>
  );
};

export default Keypad;