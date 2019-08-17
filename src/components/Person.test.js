import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
    it('should match the snapshot', () => {
        const wrapper = shallow(<Person
            id={999}
            name="Greg"
            quote="boomboomboom"
            superlative="shakalaka"
            photo="https://placekitten.com/200/300"
            removePerson={jest.fn()}
        />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should remove a person when removePerson is called', () => {
        const removePersonMock=jest.fn()
        const wrapper = shallow(<Person
            id= {4} 
            name= 'Travis'
            quote = 'You do you.'
            superlative='Most Likely to Win a Grammy'
            photo='./travis.jpg'
            removePerson = {removePersonMock}
            />)
        wrapper.find('button').simulate('click')
        expect(removePersonMock).toHaveBeenCalledWith(4)

    })
})

