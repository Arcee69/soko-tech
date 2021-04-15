import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import List from './components/List';
import Header from './components/Header'
import Search from './components/Search';
import Target from './components/Target';
import Content from './components/Content';
import Bag from './components/Bag';
import FooterB from './components/FooterB';
import FooterW from './components/FooterW';
import Sticky from './components/Sticky';

function App() {
  return (
    <div>
      <Header />
      <Target />
      <Search />
      <hr />
      <Router>
        <div className='grid'>
          <List />
          <Content />
          <Bag />
        </div>
      </Router>
      <FooterB />
      <FooterW />
      <Sticky />
    </div>
  );
}

export default App;
