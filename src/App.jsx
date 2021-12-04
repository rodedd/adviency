import React, { useState } from 'react';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { GiftList } from './components/GiftList';

import './styles/global.css';

const initialState = [
  '🎮 Oculus Quest 2',
  '💿 Future Nostalgia Neon Pink LP',
  '📕 Kimetsu No Yaiba Manga',
];

const App = () => {
  const [gifts, setGifts] = useState(initialState);

  return (
    <div className='App'>
      <Header />
      <SearchBar gifts={gifts} setGifts={setGifts}/>
      <GiftList gifts={gifts} setGifts={setGifts} />
    </div>
  );
}

export default App;