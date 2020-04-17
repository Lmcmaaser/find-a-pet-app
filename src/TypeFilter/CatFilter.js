import React from 'react';
import HasError from '../HasError';
import './TypeFilter.css';

class CatFilter extends React.Component {
  render () {
    return (
      <HasError>
        <form className="search-type" onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
          <div className="section">Search Cat Database</div>
            <legend>Search Cat DB</legend>
            <div className="part">
              <label  className="main-label" htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Rufus"
              />
            </div>
            <div className="part">
              <label className="main-label" htmlFor="gender">Gender *</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
                onChange={e => this.addGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={e => this.addGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
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
              <label className="main-label" htmlFor="arrived">Arrived (input must be formatted as MM-YYYY) *</label>
              <input
                type="text"
                name="arrived"
                id="arrived"
                placeholder="01-2020"
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
                <label className="main-label" htmlFor="adoption-date">Date of adoption (input must be formatted as MM-YYYY)</label>
                <input
                  type="text"
                  name="adoption-date"
                  id="adoption-date"
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
      </HasError>
    )
  }

}

export default CatFilter;
