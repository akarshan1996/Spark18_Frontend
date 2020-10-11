import React from 'react'
const { v4: uuidv4 } = require('uuid');

export const globalState = React.createContext({
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
});