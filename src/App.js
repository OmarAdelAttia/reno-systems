import React from 'react';
import './App.css';
import Body from './components/body/Body'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
