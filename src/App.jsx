import React, {useContext} from "react";
import SideBar from "./components/SideBar.jsx";
import Player from "./components/Player.jsx";
import Display from "./components/Display.jsx";
import {PlayerContext} from "./context/PlayerContext.jsx";

const App = () => {
    const {audioRef,track} = useContext(PlayerContext);

    return  <div id="outlet" className="h-screen bg-black">
                <div className="h-[90%] flex">
                    <SideBar />
                    <Display />
                </div>
                <Player/>
                <audio ref={audioRef} src={track.file} preload="auto"/>
            </div>;

};
export default App;