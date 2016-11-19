import axios from 'axios';

import { FETCH_MUSIC, CHANGE_DISPLAY , FETCH_MUSIC_FULFILLED,
    FETCH_MUSIC_REJECTED} from '../consts/action-types';

export const fetchMusic = (title) => ({
     function(dispatch){
        axios.get('http://api.soundcloud.com/tracks.json?client_id=d652006c469530a4a7d6184b18e16c81&q='+title+'&limit=50')
            .then((respone) => {
            dispatch({FETCH_MUSIC_FULFILLED, payload: respone.data})
            })
            .catch((err) => {
            dispatch({FETCH_MUSIC_REJECTED, payload: err})
            })
    }

});

// export const addSearch = (title) => ({
//     type: FETCH_MUSIC_REJECTED,
//     payload: title
// });
//
// export const addSearch = (title) => ({
//     type: FETCH_MUSIC_FULFILLED,
//     payload: title
// });

export const changeDisplay = () => ({
    type: CHANGE_DISPLAY
});



