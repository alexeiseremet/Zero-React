import React, {Component} from 'react';
import './tile.css';

class Tile extends Component {
  constructor() {
    super();

    this.showModal = this.showModal.bind(this);
  }

  showModal = (event) => {
    event.preventDefault();

    const data = this.props.data;
    alert(JSON.stringify(data));
  };

  render() {
    const data = this.props.data;

    return (
      <div className="tile">
        <a className="tile__content" href={`#photo-${data.id}`} onClick={this.showModal}>
          <img src={data.url} alt={data.title}/>
        </a>
      </div>
    )
  }
}

export default Tile
