import React from 'react'

import deleteIcon from '../assets/images/remove.png';
import '../styles/GiftList.css';

const GiftList = ({ gifts, setGifts }) => {

  const handleRemove = (index) => {
    const newList = [...gifts];
    newList.splice(index, 1);
    setGifts([
      ...newList,
    ]);
  };

  return (
    <div className="GiftList">
      <ul>
        {gifts.map((gift, index) => (
          <li key={index}>
            {gift}
            <img 
              src={deleteIcon}
              onClick={() => handleRemove(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { GiftList };
