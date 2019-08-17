import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should update the state when a addNewPerson is called', () => {
    const wrapper = shallow(<App />)
    const newPerson = {
      id: 999, 
      name: 'Greg',
      quote: 'This is pretty cool',
      superlative: 'Most likely to be a raptor',
      photo: "https://placekitten.com/200/300",
      role: "students"
    }
    expect(wrapper.state('students').length).toEqual(26);
    wrapper.instance().addNewPerson(newPerson)
    expect(wrapper.state('students').length).toEqual(27);
  })

  it('should delete a member and update the state when removePerson is called', () => {
    const wrapper = shallow(<App />);
    const newPerson = {
      id: 21, 
      name: 'Abigail', 
      quote: 'This is an original quote', 
      superlative: 'Most likely to be a cat or something', 
      photo: 'https://placekitten.com/200/300'
    }
    expect(wrapper.state('students').length).toEqual(26);
    wrapper.instance().removePerson(newPerson);
    expect(wrapper.state('students').length).toEqual(25);
  })

  it('should match the snapshot taken', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  })
})
