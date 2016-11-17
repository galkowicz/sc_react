import { ADD_SEARCH, CHANGE_DISPLAY } from '../consts/action-types';

const reducer = (state, action) => {

    switch (action.type) {

        case ADD_SEARCH:
            return action.search;

        case CHANGE_DISPLAY:
            return Object.assign({}, state, {
                display: action.display
            })
    }

    return state;
};

export default reducer;