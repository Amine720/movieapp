import React from 'react';
// import {BrowserRouter as Router, NavLink, BrowserRouter} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/film-reel.png'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo" width="60" />
            </div>
            <div className={styles.navlinks}>
                    {/* <Router>
                        <NavLink exact to='/' activeClassName={styles.active}>Movies</NavLink>
                        <NavLink to='/tv' activeClassName={styles.active}>TV shows</NavLink>
                        <NavLink to='/people' activeClassName={styles.active}>People</NavLink>
                        <NavLink to='/trending' activeClassName={styles.active}>Trending</NavLink>
                    </Router> */}
                <a href='/'>Movies</a>
                <a href='/tv'>TV shows</a>
                <a href='/people'>People</a>
                <a href='/trending'>Trending</a>
            </div>
        </nav>
    )
}

export default Navbar;