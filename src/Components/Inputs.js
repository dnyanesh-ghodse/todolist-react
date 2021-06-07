import React from 'react'

function Inputs(props) {
    return (
      <>
        <input
        type="text"
        placeholder="Add An Item"
        onChange={props.change}
        value={props.v}
      ></input>
      </>
    );
}

export default Inputs
