import React from 'react';
import Person from './Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({staff, students}) => {
    const staffCards = staff.map(worker => (
        <Person person={worker} key={worker.id} />
    ))
    const studentCards = students.map(student => (
        <Person person = {student} key= {student.id} />
    ))
    return (
        <section className = 'staff__section'>
            {staffCards}
            {studentCards}
        </section>
    )
}

export default Cohort;
