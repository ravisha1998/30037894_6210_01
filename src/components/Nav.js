import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav({ data }) {
  return (
    <nav>
      <ul>
        {data.map((scp) => (
          <li key={scp.model}>
            <Link to={`/${scp.model}`}>{scp.model}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
