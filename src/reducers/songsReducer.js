import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'song1', duration: '4:32'},
        {title: 'song2', duration: '4:32'},
        {title: 'song3', duration: '4:32'},
        {title: 'song4', duration: '4:32'},
        {title: 'song5', duration: '4:32'},
    ];
};

const selectedSOngReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSOngReducer
});