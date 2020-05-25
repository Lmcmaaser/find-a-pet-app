import React from 'react';
import './ValidationSuccess.css';

//accepts a property called message, which contains the validation message to be displayed
export default function ValidationSuccess(props) {
  if(props.message) {
    return (
      <div className="success">{props.message}
        <button onClick={props.removeMessage}>
        X
        </button>
      </div>
    );
  }
  return <></>
}
