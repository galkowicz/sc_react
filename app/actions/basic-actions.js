import { ADD_SEARCH, CHANGE_DISPLAY } from 'consts/action-types';

export const addSearch = (title) => ({
    type: ADD_SEARCH,
    payload: title
});

export const changeDisplay = () => ({
    type: CHANGE_DISPLAY
});



