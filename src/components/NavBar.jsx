import React from "react";
import {assets} from "../assets/assets.js";

const NavBar = () => {

    return  <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img src={assets.arrow_left} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
                    <img src={assets.arrow_right} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                    <p className="bg-black text-[15px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer">Install App</p>
                    <p className="bg-pink-400 text-white w-7 h-7 rounded-full flex items-center justify-center font-light">D</p>
                </div>
            </div>
        </>;

};
export default NavBar;