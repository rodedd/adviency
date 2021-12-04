import React from 'react'

import '../styles/GiftList.css';

const GiftList = ({ gifts, setGifts }) => {
  return (
    <div className="GiftList">
      <ul>
        {gifts.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul>
    </div>
  );
}

export { GiftList };
