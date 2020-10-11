import React from 'react';
const { v4: uuidv4 } = require('uuid');

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RightDivision from './index';
import { render, fireEvent } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

describe('Right Division Component', () => {
    it('should show the text if no list item is checked', () => {
        const contextValues = {
            data: [
                {
                    heading: 'Portugal',
                    subHeadings: [
                        { id: uuidv4(), text: 'abc', checked: false },
                        { id: uuidv4(), text: 'def', checked: false },
                    ],
                },
                {
                    heading: 'America',
                    subHeadings: [
                        { id: uuidv4(), text: 'akarshan', checked: false },
                        { id: uuidv4(), text: 'random', checked: false },
                        { id: uuidv4(), text: 'lorem', checked: false }
                    ],
                },
                {
                    heading: 'India',
                    subHeadings: [
                        { id: uuidv4(), text: 'Software engineer', checked: false },
                        { id: uuidv4(), text: 'Techincal Architect', checked: false },
                        { id: uuidv4(), text: 'Technical Lead', checked: false }
                    ],
                }
            ]
        };

        const { getByText } = render(<RightDivision />)
        expect(getByText('Confirmed!')).toBeInTheDocument()

        // const element = toggleInstance.find('h4');
        // expect(element.text()).toBe('No values selected');
    });
});