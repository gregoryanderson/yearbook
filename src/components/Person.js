import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
const Person = ({person}) => {
    const {id, name, quote, superlative, photo} = person;
    console.log(person)
    return (
        <section className='person__section'>
            <section className='photo__section'>
                <img className='photo__img' src={photo} alt='staff member photo' />
            </section>
            <section className='name__section'>
                {name}
            </section>
            <section className='quote__section'>
                {quote}
            </section>
            <section className='superlative__section'>
                {superlative}
            </section>
        </section>
    )
}

export default Person;
