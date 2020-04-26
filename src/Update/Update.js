import React from 'react'
import PetContext from '../PetContext'
// import ValidationError from '../ValidationError.js'
import './Update.css';

class Update extends React.Component {
  static contextType = PetContext;
  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }

  /* updateAdoptionStatus(adopted) {
    this.setState({adopted: value: , touched: true}});
  }*/

  updateDateAdopted(date_adopted) {
    this.setState({date_adopted: {value: date_adopted, touched: true}});
  }

  render() {
    const { types=[], pets=[] } = this.context
    return (
      <form className="update-form">
        <h2>Update an animal's information</h2>
        <fieldset>
          <legend>Update Form</legend>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
            />
          </div>
          <div className="part">
              <label className="main-label" htmlFor="age">Age *</label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="5"
              />
            </div>
          <div className="part">
            <label className="main-label" htmlFor="adopted">Adoption status</label>
            <input
              type="radio"
              id="yes"
              name="yes"
              value="yes"
            />
            <label htmlFor="yes">Yes</label>

            <input
              type="radio"
              id="no"
              name="no"
              value="no"
            />
            <label htmlFor="no">No</label>
          </div>
          <div className="part">
              <label className="main-label" htmlFor="date_adopted">Date of adoption (input must be formatted as MM-YYYY)</label>
              <input
                type="text"
                name="date_adopted"
                id="date_adopted"
                placeholder="01-2020"
              />
          </div>
          <div>
            <button
              type="submit"
              className="submit-button">
                Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;
