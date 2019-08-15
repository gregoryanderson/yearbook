import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor () {
        super ()
        this.state = {
            id: null,
            name: '',
            quote: '',
            photo: 'https://placekitten.com/200/300',
            superlative: '',
            role: 'staff',
            filter: ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({[name]: value});
    }

    updateNewPerson = event => {
        event.preventDefault();
        this.props.addNewPerson(this.state);
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            id: null,
            name: '',
            quote: '',
            photo: 'https://placekitten.com/200/300',
            superlative: '',
            role: 'staff',
            filter: ''
        })
    }

    render () {
        const { name, quote, superlative } = this.state;
        return (
            <section className='form__section'> 
                <p>Add a person!</p>  
                <form className='form__form'>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        name='name' 
                        value={name} 
                        onChange={event => this.handleChange(event)}
                    />
                    <input
                        type='text' 
                        placeholder='Quote' 
                        name='quote' 
                        value={quote}
                        onChange={event => this.handleChange(event)}
                    />
                    <input
                        type='text'
                        placeholder='Superlative'
                        name='superlative'
                        value={superlative}
                        onChange={event => this.handleChange(event)}
                    />
                    <button className='form__button' onClick={event => this.updateNewPerson(event)}>Click to update!</button>
                </form> 
            </section>
        )
    }
}

export default Form;