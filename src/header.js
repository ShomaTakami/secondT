import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";

import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <span align='left' className='left inline'>
          Angular 6 MatTable CRUD Example
        </span>
        <span align='right' className='right inline'>
          Reload data: <ReplayIcon />
        </span>
      </div>
    );
  }
}

export default Header;
