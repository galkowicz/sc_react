import { FETCH_MUSIC,FETCH_MUSIC_REJECTED,FETCH_MUSIC_FULFILLED,
    CHANGE_DISPLAY } from '../consts/action-types';

const initialState = {
    searches:[],
    fetching: false,
    fetched: false,
    error: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_MUSIC:
            return Object.assign({}, state, {fetching: true});

        case FETCH_MUSIC_REJECTED:
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
            });

        case FETCH_MUSIC_FULFILLED:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                searches: action.searches
            });

        case CHANGE_DISPLAY:
            return Object.assign({}, state, {
                display: action.display
            })
    }

    return state;
};

export default reducer;