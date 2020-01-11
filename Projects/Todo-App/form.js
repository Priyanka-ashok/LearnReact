import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.initialState = {
      name: "",
      job: ""
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { name, job } = this.state;
    return (
      <div>
        <form>
          <label for="name"> Add Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <label for="job">Add designation </label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}
          />
          <input className="submit" type="button" value="submit" onClick={this.submitForm}/>
        </form>
      </div>
    );
  }
}

export default Form;
