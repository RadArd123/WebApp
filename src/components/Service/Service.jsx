import React, { useEffect, useState } from "react";

export function Service() {
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/seasons/2011/fall?sfw")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched anime data:", data.data);
                setAnimeData(data.data); 
            })
            .catch((error) => console.error("Error fetching anime:", error));
    }, []);

    return animeData; 
}

export default Service;
