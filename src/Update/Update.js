import React from 'react'
import './Update.css';

class Update extends React.Component {
  render () {
    return(
      <form className="update">
        <h2>Update an animal's information</h2>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control"
              name="name" id="name"/>
        </div>
        <div className="form-group">
            <label htmlFor="type">Type * (make this a drop down?)</label>
            <input type="type" className="registration__control"
              name="type" id="type" />
        </div>
        <div className="form-group">
            <label htmlFor="age">Age (Must be a number, leave blank if age is unknown.)</label>
            <input type="age" className="registration__control"
              name="age" id="age" />
        </div>
        <div className="form-group">
          <label htmlFor="adoption">Adoption status</label>
          <input type="radio" id="yes" name="yes" value="yes" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="no" value="no" />
          <label htmlFor="no">No</label>
        </div>
        <div>
          <button
            type="submit"
            className="submit-button">
              Submit
          </button>
        </div>
      </form>
    )
  }
}

export default Update;
