import React, { useState } from 'react';
import './App.css'; 
function CharacterCounter() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0); 


  const handleChange = (e) => {
    setText(e.target.value);
    setCount(e.target.value.length);
  };

  return (
    <div className="character-counter">
      <h2>Penghitung Karakter</h2>
      <textarea
        placeholder="Masukkan teks di sini..."
        value={text}
        onChange={handleChange}
      />
      <p>Jumlah Karakter: {count}</p>
    </div>
  );
}

export default CharacterCounter;
