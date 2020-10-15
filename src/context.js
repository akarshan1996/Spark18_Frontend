import React from 'react'
const { v4: uuidv4 } = require('uuid');

export const globalState = React.createContext({
    data: [
        {
            heading: 'Portugal',
            subHeadings: [
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Software engineer', checked: false },
            ],
        },
        {
            heading: 'America',
            subHeadings: [
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Software engineer', checked: false },
            ],
        },
        {
            heading: 'India',
            subHeadings: [
                { id: uuidv4(), text: 'Software engineer', checked: false },
                { id: uuidv4(), text: 'Techincal Architect', checked: false },
            ],
        }
    ]
});