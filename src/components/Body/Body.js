import React from 'react';
// import Option from '../UI/Options/Option';
import styles from './Body.module.css';
import Movies from '../Movies/Movies';
// import TopRated from '../Movies/TopRated';
// import Upcoming from '../Movies/Upcoming';
// import Playing from '../Movies/Playing';
import Tvshows from '../TVShows/Tvshows';
// import TvRated from '../TVShows/TvRated';
// import TvUpcoming from '../TVShows/TvUpcoming';
// import TvPlaying from '../TVShows/TvPlaying';
import { BrowserRouter, Route } from 'react-router-dom';
import Trending from '../Trending/Trending';

const Body = () => {
    return (
        <div className={styles.body}>
            {/* <Option /> */}
            <BrowserRouter>
                <Route exact path='/' component={Movies} />
                {/* <Route exact path='/movie-rated' component={TopRated} />
                <Route exact path='/movie-upcoming' component={Upcoming} />
                <Route exact path='/movie-playing' component={Playing} /> */}
                <Route exact path='/tv' component={Tvshows} />
                <Route exact path='/trending' component={Trending} />
                {/* <Route exact path='/tv-rated' component={TvRated} />
                <Route exact path='/tv-upcoming' component={TvUpcoming} />
                <Route exact path='/tv-playing' component={TvPlaying} /> */}
            </BrowserRouter>
        </div>
    )
}

export default Body;