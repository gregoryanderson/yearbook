import React from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
const Cohort = props => {


    const staffCards = props.staff.map(worker => (
        <Person person={worker} key={worker.id} />
    ))

    const studentCards = props.students.map(student => (
        <Person person = {student} key= {student.id} />
    ))

    return (
        <section>
            <h1 className='staff__h1'>Staff</h1>
            <section className = 'staff__section'>{staffCards}</section>
            <h1 className='student__h1'>Students</h1>
            <section className = 'student__section'>{studentCards}</section>
        </section>   
    )
}

export default Cohort;
