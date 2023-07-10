import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ changeMode }) => {
  return (
    <header className="d-flex justify-betewn">
      <ul className="d-flex">
        <li>
          <Link to={'/'}>Accueil</Link>
          <Link to={'/project'}>Projet</Link>
          <Link to={'/skill'}>Compétence</Link>
        </li>
      </ul>
      <button
        className={'mr-2'}
        style={{ color: 'black !important' }}
        onClick={changeMode}
      >
        Mode
      </button>
    </header>
  );
};

export default Header;
