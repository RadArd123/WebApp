import Info from '../info/Info.jsx'
import React from 'react'
import { useGlobalContext } from '../context/useGlobal'
import Popular from './Popular'
import Upcoming from './Upcoming.jsx'
import Aired from './Aired.jsx'
import TopAnime from './TopAnime.jsx'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";


function Home() {

    const {handleSubmit, search, searchAnime, handleChange, getPopularAnime, getUpcomingAnime,  getAiringAnime} = useGlobalContext();

    const [rendered, setRendered] = useState('popular');
   

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            case 'aired':
                return <Aired rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }


  return (
    <>
        <Info/>

        <div className="mt-10 ml-3 md:ml-10 relative mr-3 md:mr-10 " >
            <h1 className="my-5 font-extrabold text-3xl text-white ml-20 mb-8">Top Animes</h1>
            <div className=" flex flex-row overflow-auto pb-10 scrollable1">
                <TopAnime/>
            </div>
        </div>
        
        <div className= " mt-16 text-2xl text-white flex flex-col justify-center gap-10 items-center " >
        <form onSubmit={handleSubmit}>
                <div className='relative flex items-center w-[300px] sm:w-[500px]'>
                    <input className= 'text-lg  text-white bg-[#121212] border border-gray-700 rounded-full outline-none w-full px-4 p-2'
                        type='text' 
                        placeholder='Search Anime' 
                        value={search} 
                        onChange={handleChange} 
                    />
                    <button className='text-white  absolute right-4' type="submit" onClick={handleSubmit}><CiSearch className="text-3xl  bg-transparent"/></button>
                </div>
            </form>
            <div className='flex gap-5  md:gap-20 mt-0'>
                <button className='border-2 p-2 px-4 rounded-full' onClick={() => {
                setRendered('popular')
                getPopularAnime();
                }}>Popular</button>
                <button className='border-2 p-2 px-4 rounded-full' onClick={() => {
                setRendered('upcoming')
                getUpcomingAnime();
                }}>Upcoming</button>
                <button className='border-2 px-4 rounded-full' onClick={() => {
                setRendered('aired')
                getAiringAnime();
                }}>Aired</button>
            </div>
        </div>
        {switchComponent()}
            
    </>
  );
}
export default Home;
