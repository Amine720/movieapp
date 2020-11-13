import React from 'react';
import star from '../../../assets/star.png';
import styles from './MovieCard.module.css';

const MovieCard = (props) => {
    return (
        <div className={styles.Card}>
            <div>
                <img src={'https://image.tmdb.org/t/p/w200' + props.image} alt="poster" className={styles.poster} />
                <div className={styles.ratings}>
                    <img src={star} alt="star" width="10" />
                    {props.rating}
                </div>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default MovieCard;