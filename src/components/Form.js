import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quote: "",
      photo: "https://placekitten.com/200/300",
      superlative: "",
      role: "students",
      filter: ""
    };
  }

  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clickForNewPerson = event => {
    event.preventDefault();
    const newPerson = {
        id: Date.now(),
        ...this.state
    }
    this.props.addNewPerson(newPerson);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: "",
      quote: "",
      photo: "https://placekitten.com/200/300",
      superlative: "",
      role: "students",
      filter: ""
    });
  };

  render() {
    const { name, quote, superlative } = this.state;
    return (
      <section className="form__section">
        <p>Add a person!</p>
        <form className="form__form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Quote"
            name="quote"
            value={quote}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Superlative"
            name="superlative"
            value={superlative}
            onChange={this.handleChange}
          />
          <button className="form__button" onClick={this.clickForNewPerson}>
            Click to add someone!
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
