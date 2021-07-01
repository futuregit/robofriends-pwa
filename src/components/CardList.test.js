import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import React from 'react';
import CardList from './CardList';

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Fred Snow',
            username: 'FredFred',
            email: 'Fred@email.com'
        },

        {
            id: 2,
            name: 'Wilma Snow',
            username: 'Wilma',
            email: 'Wilma@email.com'
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobots}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
})