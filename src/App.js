import React from 'react';
import Header from './components/pages/Header';
import Routers from './routes/Routers';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
