import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="l-footer">
        <div className="l-footer__inner container">
          &copy; {new Date().getFullYear()} INSTAGRAM
        </div>
      </footer>
    )
  }
}

export default Footer
