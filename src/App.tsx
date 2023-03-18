import React, { useEffect, useState } from "react";
import { SiApplemusic } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusics } from "./store/musics/actions";
import { RootState } from "./store/reducers";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { MusicsActions } from "./store/musics/interface";
import Musics from "./components/musics";
import toast from "react-hot-toast";

function App() {
  const dispatch: ThunkDispatch<RootState, null, MusicsActions> = useDispatch();
  const { musics, loading } = useSelector((state: RootState) => state.musics);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        document.getElementById("submit_search")?.click();
      }
    });
  }, []);

  return (
    <div>
      <div className="App h-full">
        <div className="bg-gray-900 py-16 h-full w-full">
          <div className="relative isolate overflow-hidden h-full  px-6 py-24 sm:px-24 xl:py-32">
            <div className=" flex flex-col items-center">
              <SiApplemusic color="white" size={60} />
              <h1 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4">
                Get your artist musics
              </h1>
              <h2 className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                You just need to search.
              </h2>
            </div>
            <div className="mx-auto mt-10 flex max-w-md gap-x-4 mb-12 w-full">
              <label htmlFor="email-address" className="sr-only">
                Artist name
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="name"
                name="name"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter artist name or music"
              />
              <button
                id="submit_search"
                onClick={() => {
                  if (!search) return toast.error("Please, empty field...");
                  if (loading) return;
                  dispatch(fetchMusics(search));
                }}
                type="button"
                className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Search
              </button>
            </div>
            {(musics?.length || loading) && <Musics />}
          </div>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a target="_blank" href="https://github.com/natanfirst" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              Hi ,im Natan , follow me in Github
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
