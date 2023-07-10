import React from 'react';

const Chips = ({ name }) => {
  return (
    <div
      style={{ backgroundColor: '#FAD8D6', fontSize: 10 }}
      className="pr-2 pl-2 pt-1 pb-1 ml-2 radius-8"
    >
      {name}
    </div>
  );
};

export default Chips;
