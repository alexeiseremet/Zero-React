import React, {Component} from 'react';
import './tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <div className="tile__content">
          <img src={this.props.photo.url} alt={this.props.photo.title}/>
        </div>
      </div>
    )
  }
}

export default Tile
