import { MusicsActionTypes, MusicsState, MusicsActions } from "./interface";

const initialState: MusicsState = {
  musics: [],
  loading: false,
  error: null,
};

const musicsReducer = (
  state = initialState,
  action: MusicsActions
): MusicsState => {
  switch (action.type) {
    case MusicsActionTypes.FETCH_MUSICS_REQUEST:
      return { ...state, loading: true , musics: [] };
    case MusicsActionTypes.FETCH_MUSICS_SUCCESS:
      return { ...state, loading: false, musics: action.payload };
    case MusicsActionTypes.FETCH_MUSICS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default musicsReducer;
