import React from 'react'
import './Search.css';

class Search extends React.Component {
  render () {
    return (
      <form className="search">
        <h2>Search for an Animal in the Database</h2>
        <div className="search-hint">* required field</div>
        <div className="form-group">
          <h3>Search by: *</h3>
          <input type="radio" required/>
          <label htmlFor="all">All</label>

          <input type="radio" required/>
          <label htmlFor="type">Type of animal</label>

          <input type="radio" required/>
          <label htmlFor="all">All animals in the shelter</label>
        </div>
        <div>
          <button
            type="submit"
            className="search-button">
              Search
          </button>
        </div>
      </form>
    )
  }
}

export default Search;
