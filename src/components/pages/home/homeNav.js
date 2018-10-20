import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const HomeNav = () =>
    <nav className="homeNav">
        <NavLink to="/store">
            Store
        </NavLink>
        <NavLink exact to="/">
            Your Aquarium
        </NavLink>
        <NavLink to="/leaderboard">
            Leaderboard
        </NavLink>
    </nav>