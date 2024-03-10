import React from 'react';
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <div className="rating-list">
        <Stars count={1} />
        <Stars count={3} />
        <Stars count={5} />
      </div>
    </div>
  );
}

export default App;
