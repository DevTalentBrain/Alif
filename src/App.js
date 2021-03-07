import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let DataForm = props => {
  const { handleSubmit } = props;
  return <div className="row">
  <div className="col col-6">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <div className="control">
            <Field name="name" component={renderField} type="text" label="Name"/>
          </div>
        </div>

        <div className="form-group">
          <div className="control">
            <Field name="surname" component={renderField} type="text" label="Surname"/>
          </div>
        </div>

        <div className="form-group">
          <div className="control">
            <Field name="birthdate" component={renderField} type="date" label="birth date"/>
          </div>
        </div>

        <div className="form-group">
          <div className="control">
            <Field className="form-control" name="select" component="select">
              <option />
              <option value="Star">&#x2605;</option>
              <option value="Heart">&#x2665;</option>
              <option value="Octagon">&#x2617;</option>
            </Field>
          </div>
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    <div className="col col-6">
      <div className="text-left">
        <p id="Name">Name:</p>
        <p id="Surname">Surname:</p>
        <p id="Birthdate">Birth date:</p>
        <br />
        <p id="Select">Select:</p>
      </div>
    </div>
  </div>;
};

const validate = val => {
  const errors = {};
  if (!val.name) {
    console.log('First Name is required');
    errors.name = 'Пур намоед!';
  }
  if (!val.surname) {
    console.log('Last Name is required');
    errors.surname = 'Пур намоед!';
  }
  if (!val.birthdate) {
    console.log('Birthdate is required');
    errors.birthdate = 'тарихи рузро пура намоед!';
  }
  if (!val.select) {
    console.log('Select is required');
    errors.select = 'Пур намоед!';
  }
  
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

DataForm = reduxForm({
  form: 'signIn',
  validate,
})(DataForm);

class App extends Component {

  handleSubmit = values => {
    document.querySelector('#Name').innerText = 'Name: ' + values.name;
    document.querySelector('#Surname').innerText = 'Surname: ' + values.surname;
    document.querySelector('#Birthdate').innerText = 'Birth date: ' + values.birthdate;
    document.querySelector('#Select').innerText = 'Select: ' + values.select;
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      
      <div className="App">
        <div className="container">
          <DataForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;