import React from "react";
import Person from "./Person";
import "./Cohort.css";

const Cohort = ({people, removePerson, type}) => {
  const peopleCards = people.map(person => (
    <Person
      person={person}
      id={person.id}
      key={person.id}
      name={person.name}
      photo={person.photo}
      superlative={person.superlative}
      quote={person.quote}
      removePerson={removePerson}
      type={type}
    />
  ));

  return (
    <section>
      <section className="people__section">{peopleCards}</section>
    </section>
  );
};

export default Cohort;
