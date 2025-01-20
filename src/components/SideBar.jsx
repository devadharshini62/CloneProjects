import React from "react";
import {assets} from "../assets/assets.js";

const SideBar = () => {
  return  <div id="sidenav" className="w-[25%] h-full flex-col gap-2 text-white p-2 hidden lg:flex">
              <div id="home-section" className="h-[15%] bg-[#121212] flex flex-col rounded justify-around">
                  <div className="flex gap-3 items-center pl-8 cursor-pointer">
                      <img className="w-6" src={assets.home_icon}/>
                      <p className="font-bold">Home</p>
                  </div>
                  <div className="flex gap-3 items-center pl-8 cursor-pointer">
                      <img className="w-6" src={assets.search_icon}/>
                      <p className="font-bold">Search</p>
                  </div>
              </div>
      <div id="library-section" className="h-[85%] bg-[#121212] rounded">
          <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                  <img className="w-6" src={assets.stack_icon}/>
                  <p className="font-bold">Your Library</p>
              </div>
              <div className="flex items-center gap-3">
                  <img className="w-6" src={assets.arrow_icon}/>
                  <img className="w-6" src={assets.plus_icon}/>
              </div>
          </div>
          <div
              className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
              <h1>Create your playlist</h1>
              <p className="font-light">it's easy we'll help you !</p>
              <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 font-light">Create Playlist</button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
              <h1>Let's find some podcast to follow</h1>
              <p className="font-light">we'll keep you updated on new episodes</p>
              <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 font-light">Browse Podcasts</button>
          </div>
      </div>
  </div>;
};
// export default App;
export default SideBar;