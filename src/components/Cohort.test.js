import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
    it('should match the snapshot', () => {
    const wrapper = shallow(<Cohort people={[ {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'}]}
    removePerson={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot()
    })
})