import React, { Component } from "react";
import Cohort from "./Cohort";
import Form from "./Form";
import peopleData from "../data/yearbook-data.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: peopleData.staff,
      students: peopleData.students
    };
  }

  addNewPerson = newPerson => {
    let addedPerson = {...newPerson, id: Date.now() };
    this.setState({ [newPerson.role]: [...this.state[newPerson.role], addedPerson] });
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Form addNewPerson={this.addNewPerson}/>
        <Cohort staff={this.state.staff} students={this.state.students} />
      </div>
    );
  }
}

export default App;
