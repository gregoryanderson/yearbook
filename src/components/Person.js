import React from "react";
import "./Person.css";

// PERSON COMPONENT CODE GOES HERE
const Person = ({ id, photo, name, quote, superlative, removePerson }) => {
  return (
    <section className="person__section">
      <section className="photo__section">
        <img
          className="photo__img"
          src={photo}
          alt="staff member photo"
        />
      </section>
      <p
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="name__p"
      >
        {name}
      </p>
      <p
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="quote__p"
      >
        "{quote}"
      </p>
      <p
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="superlative__p"
      >
        {superlative}
      </p>
      <button onClick={() => removePerson(id)}>
        Does this person even go here?
      </button>
    </section>
  );
};

export default Person;
