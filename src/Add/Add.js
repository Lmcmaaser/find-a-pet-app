import React from 'react'
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError.js'
import PetContext from '../PetContext';
import './Add.css';

class Add extends React.Component {
  state = {
    name: {
      value: ''
    }
  }
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = PetContext
  constructor(props) {
    super(props)
    this.name = React.createRef();
  }

  updatePetName(name) {
    this.setState({petName: {value: name, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const pet = {
      name: name.value,
      pet_type: event.target.pet_type.value,
      sex: event.target.sex.value,
      age: event.target.age.value
    }
    console.log(pet)
  }
    /*fetch(`${data}`, {
      method: 'POST',
      body: JSON.stringify(pet)
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then((pet) => {
        this.context.Add(pet)
        console.log(pet)
        this.props.history.goBack()
      })
      .catch(error => {
        console.error({ error })
      })
    }*/

    validateName() {
      const name = this.state.name.value.trim();
      if (!this.state.name.touched) {
        return
      }
      if (name.length === 0) {
        this.name.current.focus();
        return "Name is required";
      } else if (!name.match(/[A-z]/)) {
        this.name.current.focus();
        return "Name must include characters from the modern English alphabet";
      }
    }

    validateAge() {
      const age = this.state.age.value.trim();
      if (age.length === 0) {
        return "Age is required";
      } else if (age.length < 0 || age.length > 2) {
        return "Age must be between 1 and 2 characters long.";
      } else if (!age.match(/[0-9]/)) {
        return "Age must contain at least one number";
      }
    }

    validateDateArrived() {
      const date_arrived = this.state.age.value.trim();
      if (date_arrived.length === 0) {
        return "Arrival month and year is required";
      } else if (date_arrived.length < 7 || date_arrived.length > 7) {
        return "Arrival information must be formatted as MM-YYYY.";
      }
    }

  render () {
    const nameError = this.validateName();
    const ageError = this.validateAge();
    const date_arrivedError = this.validateDateArrived();
    return (
      <form className="add-form" onSubmit={event =>       this.handleSubmit(event)}>
        <h2>Add an animal to the database (*  indicates a required field)</h2>
        <fieldset>
          <legend>Add Form</legend>
          <label className="main-label" htmlFor="type">Select a type for your no * </label>
          <select
            name="typeid"
            aria-label="select pet type"
          >
            {this.context.types.map(type =>
              <option key={type.typeid} value={type.typeid}>{type.pet_type}</option>
            )}
          </select>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Fluffy"
              ref={this.name}
              aria-label="add-name"
              aria-required="true"
              aria-invalid={ this.state.name.touched && !!nameError }
              aria-describedby="nameError"
              onChange={event => this.updateName(event.target.value)}
            />
              {this.state.name.touched && (
                <ValidationError message={nameError} id="nameError"/>
              )}
          </div>
          <div className="part">
            <label className="main-label" htmlFor="sex">Sex *</label>
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              aria-label="add-male-sex"
              required
              onChange={e => this.updateSex(e.target.value)}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              aria-label="add-female-sex"
              onChange={e => this.updateSex(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="part">
            <label className="main-label" htmlFor="age">Age *</label>
            <input
              type="text"
              name="age"
              id="age"
              required
              placeholder="5"
              aria-label="add-age"
            />
            {this.state.age.touched && (
              <ValidationError message={ageError} />
            )}
          </div>
          <div className="part">
            <label className="main-label" htmlFor="date_arrived">Arrived (input must be formatted as MM-YYYY) *</label>
            <input
              type="text"
              name="date_arrived"
              id="date_arrived"
              placeholder="01-2020"
              aria-label="update-arrival-date"
              aria-required="true"
              onChange={e => this.updateDateArrived(e.target.value)}
            />
            {this.state.date_arrived.touched && (
                <ValidationError message={date_arrivedError}/>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="submit-button"
              aria-label="submit-button"
              disabled={
              this.validateName() ||
              this.validateAge() ||
              this.validateDateArrived()
             }
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}
export default Add;
