import React, {Component} from 'react';
import './list.css';

class ListInline extends Component {
  render() {
    return (
      <ul className="list list--inline">
        <li className="list__item">
          <a href="javascript:;">explore</a>
        </li>
        <li className="list__item">
          <a href="javascript:;">activity</a>
        </li>
        <li className="list__item">
          <a href="javascript:;">profile</a>
        </li>
      </ul>
    )
  }
}

export default ListInline
