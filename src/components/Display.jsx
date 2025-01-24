import React, {useRef} from "react";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";
import DisplayAlbum from "./DisplayAlbum.jsx";
import {albumsData} from "../assets/assets.js";
import {useEffect} from "react";

const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const albumBgColor = isAlbum ? albumsData[Number(albumId)].bgColor : "";
    useEffect(() => {
        if(isAlbum) {
            displayRef.current.style.background = `linear-gradient(${albumBgColor},#121212)`;
        } else {
            displayRef.current.style.background = "#121212";
        }
    });

    return  <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
                <Routes>
                    <Route  path="/" element={<DisplayHome/>}/>
                    <Route path="/album/:id" element={<DisplayAlbum />}/>
                </Routes>
            </div>;

};
export default Display;