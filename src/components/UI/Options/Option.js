import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Option.module.css';

const Option = () => {
    return (
        <Router>
            <div className={styles.nav}>
                {/* <NavLink exact to="/" activeClassName={styles.active}>Popular</NavLink>
                <NavLink to="/movie-rated" activeClassName={styles.active}>Top rated</NavLink>
                <NavLink to="/movie-latest" activeClassName={styles.active}>Latest</NavLink>
                <NavLink to="/movie-playing" activeClassName={styles.active}>Now playing</NavLink> */}
                <a href="/">Popular</a>
                <a href="/movie-rated">Top rated</a>
                <a href="/movie-upcoming">Upcoming</a>
                <a href="/movie-playing">Now playing</a>
            </div>
        </Router>
    )
}

export default Option;
