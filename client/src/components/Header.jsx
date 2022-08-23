import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import LogoMeli from '../assets/images/Logo_ML.png';
import searchImg from '../assets/images/ic_Search.png';

import '../styles/components/Header.scss';

function Header() {
  const [query, setQuery] = useState('');
  const searchInput = useRef(null);

  function handleSearch() {
    setQuery(searchInput.current.value);
  }

  const navigate = useNavigate();

  function search(event) {
    event.preventDefault();
    const path = `/items?q=${query}`;
    navigate(path);
  }

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={LogoMeli} alt="" />
          </Link>
        </div>
        <form>
          <input
            type="search"
            className="search"
            placeholder="Nunca dejes de buscar"
            value={query}
            ref={searchInput}
            onChange={handleSearch}
            required
          />
          <button type="submit" aria-label="search" onClick={search}>
            <img src={searchImg} alt="search" />
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
