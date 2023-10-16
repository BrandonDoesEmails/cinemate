import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm='') => {
    const [movies, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}&api_key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results);
        }
        
        fetchMovies();
    }, [url])

    return { movies }
}