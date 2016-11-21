import axios from 'axios';

import { FETCH_MUSIC, CHANGE_DISPLAY , FETCH_MUSIC_FULFILLED,
    FETCH_MUSIC_REJECTED} from '../consts/action-types';

export function fetchMusic(title) {
    return function (dispatch) {
        dispatch(requestMusic(title));
        return axios.get('http://api.soundcloud.com/tracks.json?client_id=d652006c469530a4a7d6184b18e16c81&q=' + title + '&limit=50')
            .then(response => response.data)
            .then(data =>
                dispatch(receiveMusic(title, data))
            )
    }

}

export const requestMusic = (title) => ({
    type: FETCH_MUSIC
});

export const receiveMusic = (title, data) => ({
    type: FETCH_MUSIC_FULFILLED,
    searches: data

});

export const changeDisplay = () => ({
    type: CHANGE_DISPLAY
});



