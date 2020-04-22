Seximport React from 'react'
import ValidationError from '../ValidationError.js'
import './Add.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {
        value: '',
        touched: false
      },
      name: {
        value: '',
        touched: false
      },
      sex: {
        value: '',
        touched: false
      },
      age: {
        value: '',
        touched: false
      },
      arrived: {
        value: '',
        touched: false
      }
    };
  }

  static defaultProps = {
    match: {
      params: {}
    }

  }
  //handlers to update state properties
  addType(type) {
    this.setState({type: {value: type, touched: true}});
  }
  addName(name) {
    this.setState({name: {value: name, touched: true}});
  }
  addSex(sex) {
    this.setState({sex: {value: sex, touched: true}});
  }
  addAge(age) {
    this.setState({age: {value: age, touched: true}});
  }
  addArrived(date_arrived) {
    this.setState({date_arrived: {value: date_arrived, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, type, sex, age, date_arrived } = this.state;
    console.log('Name: ', name.value);
    console.log('Type: ', type.value);
    console.log('Sex: ', sex.value);
    console.log('Age: ', age.value);
    console.log('Date_Arrived: ', date_arrived.value)
    const pet = {
      name: name.value,
      age: event.target.age.value,
      folderid: event.target.folderid.value,
      date_arrived: event.target.date_arrived.value,
      typeid: event.target.typeid.value
    }
    console.log(pet)
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pet)
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then((pet) => {
        this.context.Add(pry)
        console.log(pet)
        this.props.history.goBack()
      // allow parent to perform extra behaviour
      })
      .catch(error => {
        console.error({ error })
      })
    }
  }

  //validation message
  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (!name.match(/[A-z]/)) {
      return "Name must include characters from the modern English alphabet";
    }
  }

  /*validateSex() {
    const sex = this.state.sex.value.trim();
    if () {
      return "";
    }
  }*/

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
    const arrived = this.state.age.value.trim();
    if (arrived.length === 0) {
      return "Arrival month and year is required";
    } else if (arrived.length < 7 || arrived.length > 7) {
      return "Arrival information must be formatted as MM-YYYY.";
    }
  }

  render () {
    const nameError = this.validateName();
    // const typeError = this.validateType();
    // const sexError = this.validateSex();
    const ageError = this.validateAge();
    const date_arrivedError = this.validateDateArrived();
    return(
      <form className="add-form" onSubmit={event =>       this.handleSubmit(event)}>
        <h2>Add an animal to the database (*  indicates a required field)</h2>
        <fieldset>
          <legend>Add Form</legend>
          <div className="part">
            <label className="main-label" htmlFor="type">Select a type for your animal * </label>
            <input
              type="radio"
              name="dog"
              id="dog"
              aria-label="dog-type"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="dog">Dog</label>

            <input
              type="radio"
              name="cat"
              id="cat"
              aria-label="cat-type"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="cat">Cat</label>

            <input
              type="radio"
              name="bird"
              id="bird"
              aria-label="bird-type"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="bird">Bird</label>
          </div>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
              aria-label="add-name"
              aria-required="true"
              aria-invalid={ this.state.name.touched && !!nameError }
              required
              onChange={e => this.addName(e.target.value)}
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
              onChange={e => this.addSex(e.target.value)}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              aria-label="add-female-sex"
              onChange={e => this.addSex(e.target.value)}
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
              aria-label="add-arrival-date"
              aria-required="true"
              aria-invalid={ this.state.date_arrived.touched && !!date_arrivedError }
              onChange={e => this.addDateArrived(e.target.value)}
            />
            {this.state.date_arrived.touched && (
                <ValidationError message={date_arrivedError}
                id="date_arrivedError" />
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
