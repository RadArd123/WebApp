import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { MdAnchor } from "react-icons/md";
import { useGlobalContext } from '../context/useGlobal';
import { Link } from 'react-router-dom';

function Navbar() {
    const { watchlist, favorites, removeFromWatchlist, removeFromFavorites } = useGlobalContext();
    const [showFavorites, setShowFavorites] = useState(false);
    const [showWatchlist, setShowWatchlist] = useState(false);

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
        setShowWatchlist(false); 
    };

    const toggleWatchlist = () => {
        setShowWatchlist(!showWatchlist);
        setShowFavorites(false); 
    };

    return (
        <nav className="w-full flex justify-center items-center py-6 px-60 fixed z-50 sm:justify-between gap-[200px] bg-gradient-to-b from-[#090909] via-trans to-[#00000000] ">
            <div className="flex items-center text-white ml-3 gap-8 font-montserrat">
                <a className="text-2xl text-white font-bold cursor-pointer" href="/">AnyRad.</a>
                <a className="text-purple-500 text-[1rem] font-semibold hidden sm:block cursor-pointer " href="/">Home</a>
                <div className="relative">
                    <a
                        className="text-[1rem] font-semibold hidden sm:flex hover:text-purple-500 transition duration-300 cursor-pointer"
                        onClick={toggleFavorites}
                    >
                        Anime <MdAnchor className="text-xl bg-transparent" />
                    </a>
                    {showFavorites && (
                        <div className="absolute bg-gray-700 text-white p-2 rounded mt-2 w-[300px]">
                            {favorites.length > 0 ? (
                                favorites.map((anime, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <Link to={`/anime/${anime}`} className="hover:underline">{anime}</Link>
                                        <button onClick={() => removeFromFavorites(anime)} className="ml-2 text-red-500">Remove</button>
                                    </div>
                                ))
                            ) : (
                                <div>No favorite animes</div>
                            )}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <a
                        className="text-[1rem] font-semibold hidden sm:block hover:text-purple-500 transition duration-300 cursor-pointer"
                        onClick={toggleWatchlist}
                    >
                        BookMarked
                    </a>
                    {showWatchlist && (
                        <div className="absolute bg-gray-700 text-white p-2 rounded mt-2 w-[300px]">
                            {watchlist.length > 0 ? (
                                watchlist.map((anime, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <Link to={`/anime/${anime}`} className="hover:underline">{anime}</Link>
                                        <button onClick={() => removeFromWatchlist(anime)} className="ml-2 text-red-500">Remove</button>
                                    </div>
                                ))
                            ) : (
                                <div>No items in watchlist</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4 ">
                <a href="https://github.com/RadArd123/WebApp" target="_blank" rel="noopener noreferrer">
                    <button className="text-white hover:text-purple-500 transition duration-300">
                        <FaGithub className="text-3xl bg-transparent" />
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;