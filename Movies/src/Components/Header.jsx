import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  return (
    <header>
      <div className="header">
        {/* Logo Section */}
        <div className="logo">
          <img src="./icons/logo.png" alt="" onClick={() => [navigate("/")]} />
        </div>
        {/* Nav Section */}
        <nav>
          <ul>
            <li>
              <Link to="movies">Movies</Link>
            </li>
            <li>
              <Link to="tvshows">TV Shows</Link>
            </li>
            <li>
              <Link to="genre">Genre</Link>
            </li>
            <li>
              <Link to="about_us">About</Link>
            </li>
          </ul>
        </nav>
        {/* Search Seaction */}
        <div className="search_icon">
          <img
            onClick={() => setSearch(!search)}
            src={search ? "./Icons/cross.png" : "./Icons/search.png"}
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div className="search_input" id={search ? "" : "not"}>
        <img src="./icons/search.png" alt="" />
        <input
          type="text"
          placeholder="Search for a movies, tv shows, person..."
        />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
