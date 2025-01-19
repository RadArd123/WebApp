import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import img1 from "../../assets/dandadan.jpg";
import img2 from "../../assets/kaiju.jpg";
import img3 from "../../assets/demonslayer.png";
import img4 from "../../assets/boruto.webp";

import React, { useState, useRef, useEffect } from 'react';

function Info() {
    const [anime, setAnime] = useState({});
    const [backPhoto, setBackPhoto] = useState(img1);
    const [index, setIndex] = useState(0);
     const [showMore, setShowMore] = useState(false);
    const intervalIdRef = useRef(null);

    const slideShow = [
      { img: img1, id: 57334 }, 
      { img: img2, id: 52588 },
      { img: img3, id: 38000 },
      { img: img4, id: 34566 }
  ];

    const getAnime = async (id) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
      
    };

    useEffect(() => {
        getAnime(slideShow[index].id);
    }, [index]);

    const startSlideShow = () => {
        let i = 0;
        intervalIdRef.current = setInterval(() => {
            i = (i + 1) % slideShow.length;
            setBackPhoto(slideShow[i].img);
            setIndex(i);
        }, 3000);
    };

    useEffect(() => {
        startSlideShow();
        return () => clearInterval(intervalIdRef.current);
    }, []);

    const nextPicture = () => {
        clearInterval(intervalIdRef.current);
        setIndex((i) => (i + 1) % slideShow.length);
        setBackPhoto(slideShow[(index + 1) % slideShow.length].img);
    };

    const previousPicture = () => {
        clearInterval(intervalIdRef.current);
        setIndex((i) => (i - 1 + slideShow.length) % slideShow.length);
        setBackPhoto(slideShow[(index - 1 + slideShow.length) % slideShow.length].img);
    };

    return (
        <div className="flex items-center">
            <div className="fade-bottom w-full h-[100vh]">
                <img src={backPhoto} className="w-full h-[100vh] object-cover sm:object-fill"></img>
            </div>
            <button className="text-white text-[3rem] absolute left-3 mr-3" onClick={previousPicture}><GrFormPrevious /></button>
            <button className="text-white text-[3rem] absolute right-3 mr-3" onClick={nextPicture}><MdNavigateNext /></button>

            <div className="absolute flex flex-col top-[30%] ml-[10%] 2xl:top-[35%] 2xl:ml-[12%] font-montserrat">
                <h1 className="text-white text-[1.5rem] md:text-[2.5rem] font-extrabold">{anime.title}</h1>
                <p className="text-white text-[13px] md:text-[17px]">({anime.title_japanese})</p>
                <p className="text-white text-[13px] md:text-[20px] max-w-[400px] md:max-w-[780px] mt-5">
                {showMore ? anime.synopsis : `${anime.synopsis?.substring(0, 350)}...`}
                <button className='text-purple-500 ml-2' onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
                </p>
                <div className="flex items-center gap-12 mt-6">
                    <span className="text-white flex items-center">
                        <FaStar className="text-[25px] text-yellow-500" />
                        <p className="ml-2 text-[20px]"> {anime.score} ({anime.scored_by} ratings)</p>
                    </span>
                    <span className="text-white flex items-center gap-2">
                        <FaHeart className="text-[25px] text-red-400" />
                        <p className="text-[20px]">{anime.members}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Info;