import React from 'react';
import { Link } from 'react-scroll';
import { GENRES } from './genres';

export default function Navbar() {
  return (
    <ul className="nav nav-pills nav-fill justify-content-center sticky-top bg-light shadow-sm p-2">
      {GENRES.map(genre => (
        <li key={genre} className="nav-item">
          <Link
            className="nav-link btn"
            key={genre}
            to={genre.toLowerCase()}
            smooth={false}
            spy={true}
            activeclass="active"
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}
