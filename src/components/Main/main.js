import React, {Component} from 'react';
import Grid from "../Grid/grid";
import './main.css';

class Main extends Component {
  render() {
    return (
      <main id="main" className="l-main">
        <div className="l-main__inner container">
          <Grid/>
        </div>
      </main>
    )
  }
}

export default Main
