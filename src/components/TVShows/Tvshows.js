import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from '../UI/MovieCard/MovieCard';
import styles from '../Movies/Movies.module.css';

const Tvshows = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const API_KEY = "354fb2768352af5db76f643415c3ce82";
        const getMoviesData = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`);
            setMovies(res.data.results);
            setLoading(false);
        }
        getMoviesData();
        
    }, [currentPage]);
    return (
        <div>
            <div className={styles.date}>
                <span style={{color: 'white'}}>Page: </span>
                <input type='number' min="1" max="500" value={currentPage} onChange={(e) => setCurrentPage(e.target.value)} />
            </div>
            <div className={styles.Wrapper}>
                {!loading? movies.map(movie => (
                    <MovieCard image={movie.poster_path} 
                        rating={movie.vote_average} 
                        title={movie.original_name}
                        date={movie.release_date} 
                        key={movie.id}
                    />
                )): null}
            </div>
        </div>
    )
}

export default Tvshows ;