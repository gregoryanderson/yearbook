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
    let addedPerson = { ...newPerson, id: Date.now() };
    this.setState({
      [newPerson.role]: [...this.state[newPerson.role], addedPerson]
    });
  };

  removePerson = person => {
    const filteredStudents = this.state.students.filter(
      human => human.id !== person.id
    );
    const filteredStaff = this.state.staff.filter(
      human => human.id !== person.id
    )
    this.setState({ students: filteredStudents, staff: filteredStaff });
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Form addNewPerson={this.addNewPerson} />
        <h1 className="student__h1">Students</h1>
        <Cohort
          people={this.state.staff}
          removePerson={this.removePerson}
          type={"staff"}
        />
        <h1 className="student__h1">Students</h1>
        <Cohort
          people={this.state.students}
          removePerson={this.removePerson}
          type={"students"}
        />
      </div>
    );
  };
}

export default App;
