import { AlbumResponse } from "../../types/albums";

export enum AlbumsActionTypes {
  FETCH_ALBUMS_REQUEST = "FETCH_ALBUMS_REQUEST",
  FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS",
  FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE",
}

export interface AlbumState {
  album: AlbumResponse | null;
  loading: boolean;
  error: string | null;
}

export interface FetchAlbumRequestAction {
  type: typeof AlbumsActionTypes.FETCH_ALBUMS_REQUEST;
}

export interface FetchAlbumSuccessAction {
  type: typeof AlbumsActionTypes.FETCH_ALBUMS_SUCCESS;
  payload: AlbumResponse;
}

export interface FetchAlbumFailureAction {
  type: typeof AlbumsActionTypes.FETCH_ALBUMS_FAILURE;
  payload: string;
}

export type AlbumsActions =
  | FetchAlbumRequestAction
  | FetchAlbumSuccessAction
  | FetchAlbumFailureAction;
