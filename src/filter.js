import React from "react";
import "./filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className='filter'>
        <input type='text' placeholder='Filter issues' />
      </div>
    );
  }
}

export default Filter;
