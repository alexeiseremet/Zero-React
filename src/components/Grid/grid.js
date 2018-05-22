import React, {Component} from 'react';
import Tile from "../Tile/tile";
import './grid.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loadingState: true
    };

    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.fetchImages()
  }

  fetchImages = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        this.setState({images: data.slice(0, 33), loadingState: false});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="grid">
        {this.state.images.map((photo) =>
          <div className="grid__col" key={photo.id}>
            <Tile photo={photo}/>
          </div>
        )}
      </div>
    )
  }
}

export default Grid
