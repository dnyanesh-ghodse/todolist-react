import React from 'react';
import "./Items.css"

function Items(props) {
    return (
      <div className="item">
        <li>
          {props.text}
        </li>
        <i onClick={() => {props.onCheck(props.id)}} className="fas fa-trash"></i>
      </div>
    );
}

export default Items
