import React from 'react';

//accepts a property called message, which contains the validation message to be displayed
export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }
  return <></>
}
