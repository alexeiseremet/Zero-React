import React, {Component} from 'react';
import Tile from "../Tile/tile";
import './grid.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      photos      : [],
      loadingState: true,
      currentPage : 1,
      itemsPerPage: 33
    };

    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.pagePhotos = this.pagePhotos.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        this.setState({
          photos      : data.slice(0, 101),
          loadingState: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  pagePhotos = () => {
    const {currentPage, itemsPerPage} = this.state;
    const items = currentPage * itemsPerPage;

    return this.state.photos.slice(0, items);
  };

  nextPage = () => {
    const {currentPage, itemsPerPage} = this.state;
    const nextPage = currentPage + 1;

    this.setState({
      currentPage   : currentPage + 1,
      hideNextButton: nextPage * itemsPerPage > this.state.photos.length
    });
  };

  render() {
    const content = (
      <div className="0">
        <div className="grid">
          {this.pagePhotos().map((photo) => (
              <div className="grid__col" key={photo.id}>
                <Tile data={photo}/>
              </div>
            )
          )}
        </div>
        <button className="more-btn"
                onClick={this.nextPage}
                disabled={this.state.hideNextButton}>
          more photos
        </button>
      </div>
    );

    const preloader = (
      <div className="preloader">loading</div>
    );

    return (
      this.state.loadingState
        ? preloader
        : content
    )
  }
}

export default Grid
