import React, {Component} from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="l-wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
