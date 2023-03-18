import api from "../../config/api";
import { Dispatch } from "redux";
import { Musics } from "../../types/musics";
import {
  FetchMusicsFailureAction,
  FetchMusicsSuccessAction,
  FetchMusicsRequestAction,MusicsActionTypes, MusicsActions
} from "./interface";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../reducers";

export const fetchMusicsRequest = (): FetchMusicsRequestAction => ({
  type: MusicsActionTypes.FETCH_MUSICS_REQUEST,
});

export const fetchMusicsSuccess = (
  Musics: Musics[]
): FetchMusicsSuccessAction => ({
  type: MusicsActionTypes.FETCH_MUSICS_SUCCESS,
  payload: Musics,
});

export const fetchMusicsFailure = (
  error: string
): FetchMusicsFailureAction => ({
  type: MusicsActionTypes.FETCH_MUSICS_FAILURE,
  payload: error,
});

export const fetchMusics = (artist: string): ThunkAction<
Promise<void>,
RootState,
null,
MusicsActions
> => {
  return async (dispatch: Dispatch<MusicsActions>) => {
     dispatch(fetchMusicsRequest());
    try {
      const response = await api.get(`/search?q=${artist}`);
      const data: Musics[] = response.data.data;
      dispatch(fetchMusicsSuccess(data));
    } catch (error) {
      // dispatch(fetchMusicsFailure(error.message));
    }
  };
};
