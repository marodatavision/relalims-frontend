import { useState } from 'react';
import './App.css';
import LareRouter from './components/lare-router';

function App() {

  return (
    <div className="App container mx-auto my-5">
      <div className="bg-white rounded shadow-md px-5 py-3">
        <LareRouter/>
      </div>
    </div>
  );
}

export default App;
