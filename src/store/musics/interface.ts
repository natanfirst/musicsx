import { Musics } from "../../types/musics";

export enum MusicsActionTypes {
  FETCH_MUSICS_REQUEST = "FETCH_MUSICS_REQUEST",
  FETCH_MUSICS_SUCCESS = "FETCH_MUSICS_SUCCESS",
  FETCH_MUSICS_FAILURE = "FETCH_MUSICS_FAILURE",
}

export interface MusicsState {
  musics: Musics[];
  loading: boolean;
  error: string | null;
}

export interface FetchMusicsRequestAction {
  type: typeof MusicsActionTypes.FETCH_MUSICS_REQUEST;
}

export interface FetchMusicsSuccessAction {
  type: typeof MusicsActionTypes.FETCH_MUSICS_SUCCESS;
  payload: Musics[];
}

export interface FetchMusicsFailureAction {
  type: typeof MusicsActionTypes.FETCH_MUSICS_FAILURE;
  payload: string;
}

export type MusicsActions =
  | FetchMusicsRequestAction
  | FetchMusicsSuccessAction
  | FetchMusicsFailureAction;
