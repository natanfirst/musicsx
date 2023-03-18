import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";

const Album = () => {
  const dispatch = useDispatch();
  const { album, loading } = useSelector((state: RootState) => state.albums);
  const baseAnimation = "w-full rounded-2xl h-12 bg-gray-200 animate-pulse";

  useEffect(() => {
    console.log(album);
  }, [album]);

  return (
    <div className="p-10">
      <div className="flex justify-end fixed right-7">
        <button onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
          <AiOutlineClose color="white" size={32} />
        </button>
      </div>
      <div className="lg:flex items-center">
        {loading ? (
          <div className="w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] mx-auto bg-gray-200 animate-pulse"></div>
        ) : (
          <img
            className="w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] mx-auto"
            src={album?.cover_big}
            alt=""
          />
        )}

        <div className="lg:pl-4 w-fit lg:w-auto flex-1 mt-6 lg:mt-0 mx-auto">
          <h3 className="text-white text-lg lg:text-2xl font-bold">Album:</h3>
          {loading ? (
            <div className={baseAnimation}></div>
          ) : (
            <h3 className="text-white text-2xl lg:text-5xl font-bold my-2">
              {album?.title}
            </h3>
          )}

          <div className="flex mt-3 w-full">
            {!loading && (
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={album?.artist.picture_medium}
                alt=""
              />
            )}
            {loading ? (
              <div className={baseAnimation}></div>
            ) : (
              <h4 className="text-white text-lg lg:text-2xl ml-3">
                {album?.artist.name}
              </h4>
            )}
          </div>
          <div className="flex mt-5">
            <h4 className="text-white text-lg lg:text-2xl ml-3">Musics:</h4>
            <h4 className="text-white text-lg lg:text-2xl ml-3">
              {album?.tracks.data.length}
            </h4>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto mt-5 lg:max-h-[600px] grid lg:grid-cols-2 gap-x-5">
        {loading
          ? [1, 2, 3, 4, 5, 6].map(() => (
              <div className={`${baseAnimation} h-6 mb-4`}></div>
            ))
          : album?.tracks.data.map((music, index) => (
              <div
                key={index}
                className="flex justify-center lg:justify-start w-full"
              >
                <h4 className="text-white text-sm lg:text-base mb-3 lg:mb-0">{music.title}</h4>
                <h4 className="text-white ml-3 text-sm lg:text-base">
                  {music.duration > 100
                    ? music.duration / 100
                    : music.duration / 10}
                  min
                </h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Album;
