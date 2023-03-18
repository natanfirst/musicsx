import api from "../../config/api";
import { Dispatch } from "redux";
import {
  FetchAlbumRequestAction,
  FetchAlbumSuccessAction,
  FetchAlbumFailureAction ,AlbumsActionTypes, AlbumsActions
} from "./interface";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../reducers";
import { AlbumResponse } from "../../types/albums";


export const fetchAlbumRequest = (): FetchAlbumRequestAction => ({
  type: AlbumsActionTypes.FETCH_ALBUMS_REQUEST,
});

export const fetchAlbumSuccess = (
  album: AlbumResponse
): FetchAlbumSuccessAction => ({
  type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS,
  payload: album,
});

export const fetchAlbumFailure = (
  error: string
): FetchAlbumFailureAction => ({
  type: AlbumsActionTypes.FETCH_ALBUMS_FAILURE,
  payload: error,
});

export const fetchAlbum = (id: string): ThunkAction<
Promise<void>,
RootState,
null,
AlbumsActions
> => {
  return async (dispatch: Dispatch<AlbumsActions>) => {
    dispatch(fetchAlbumRequest());
    try {
      const response = await api.get(`/album/${id}`);
      const data: AlbumResponse = response.data;
      dispatch(fetchAlbumSuccess(data));
    } catch (error) {
      // dispatch(fetchMusicsFailure(error.message));
    }
  };
};
