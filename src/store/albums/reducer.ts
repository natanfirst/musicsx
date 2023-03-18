import { AlbumsActions, AlbumsActionTypes, AlbumState } from "./interface";

const initialState: AlbumState = {
    album: null,
    loading: false,
    error: null,
}

const albumsReducer = (
    state = initialState,
    action: AlbumsActions
  ): AlbumState => {
    switch (action.type) {
      case AlbumsActionTypes.FETCH_ALBUMS_REQUEST:
        return { ...state, loading: true , album: null };
      case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
        return { ...state, loading: false, album: action.payload };
      case AlbumsActionTypes.FETCH_ALBUMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default albumsReducer;
  