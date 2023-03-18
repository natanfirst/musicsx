import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbum } from "../../store/albums/actions";
import { RootState } from "../../store/reducers";
import Modal from "../modal";
import Table from "../table";
import { RiAlbumLine } from "react-icons/ri";
import Album from "./album";
import { AlbumsActions } from "../../store/albums/interface";

const Musics = () => {
  const dispatchModal = useDispatch();
  const dispatchAlbum: ThunkDispatch<RootState, null, AlbumsActions> =
    useDispatch();
  const { musics, loading } = useSelector((state: RootState) => state.musics);
  const tableHeader = useMemo(
    () => [
      {
        key: "artist",
        hiddenTitle: false,
        title: "Artist",
      },
      {
        key: "album",
        hiddenTitle: false,
        title: "Album",
      },
      {
        key: "music",
        hiddenTitle: false,
        title: "Music",
      },
    ],
    []
  );

  const tableData = useMemo(() => {
    let data: {
      id: number;
      count: JSX.Element;
      artist: JSX.Element;
      album: JSX.Element;
      music: JSX.Element;
    }[] = [];

    musics?.forEach((item, index) => {
      data = [
        ...data,
        {
          id: item.id,
          count: <span>{index < 10 ? `0${index + 1}` : index + 1}</span>,
          artist: (
            <div className={`lg:min-w-[200px] h-full flex items-center`}>
              <img
                className="w-12 h-12 object-cover"
                src={item.artist.picture_medium}
                alt=""
              />
              <div className="ml-3 text-white">
                <h4> {item.title}</h4>
                <h4> {item.artist.name}</h4>
              </div>
            </div>
          ),
          album: (
            <button
              onClick={() => {
                dispatchAlbum(fetchAlbum(`${item.album.id}`));
                dispatchModal({ type: "OPEN_MODAL" });
              }}
              className="text-white hover:text-blue-600 hover:font-bold"
            >
              {item.album.title}
            </button>
          ),
          music: (
            <div>
              <audio className="h-7" controls>
                <source src={item.preview} type="audio/mp3" />
              </audio>
            </div>
          ),
        },
      ];
    });

    return data;
  }, [dispatchAlbum, dispatchModal, musics]);

  return (
    <>
    <div className="hidden lg:block">
    <Table head={tableHeader} data={tableData} loading={loading} />
    </div>
    <div className="lg:hidden">
      {musics.map((item, index) => (
        <div key={index} className="w-ful mb-6">
            <div className={`lg:min-w-[200px] h-full flex items-start lg:items-center`}>
              <img
                className="w-12 h-12 object-cover"
                src={item.artist.picture_medium}
                alt=""
              />
              <div className="ml-3 text-white">
                <h4>{item.title}</h4>
                <h4> {item.artist.name}</h4>
              </div>
              <button
              onClick={() => {
                dispatchAlbum(fetchAlbum(`${item.album.id}`));
                dispatchModal({ type: "OPEN_MODAL" });
              }}
              className="text-white hover:text-blue-600 hover:font-bold ml-auto"
            >
             <RiAlbumLine  color="rgb(37 99 235)" size={24}/>
            </button>
            </div>
            <audio className="h-7 mt-5 w-full" controls>
                <source src={item.preview} type="audio/mp3" />
              </audio>
        </div>
      ))}
    </div>
      <Modal>
        <Album />
      </Modal>
    </>
  );
};

export default Musics;
