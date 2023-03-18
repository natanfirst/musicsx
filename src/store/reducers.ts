import { combineReducers } from 'redux';
import albumsReducer from './albums/reducer';
import modalReducer from './modals/reducer';
import musicsReducer from './musics/reducer';

const rootReducer = combineReducers({
    musics: musicsReducer,
    albums: albumsReducer,
    modals: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;