const { v4: uuidv4 } = require('uuid');

export const mainReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            const newState = state.data.map(item => {
                const newSubHeadings = item.subHeadings.map(val => {
                    return val.id === action.payload.id ? { ...val, checked: !val.checked } : { ...val }
                });
                return {
                    ...item,
                    subHeadings: newSubHeadings
                }
            })
            return {
                ...state,
                data: newState
            };
        default:
            return state
    }
}