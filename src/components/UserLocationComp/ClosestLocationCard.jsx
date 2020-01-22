/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function ClosestLocationCard(props) {
  const { text, name, id, website } = props;
  return (
    <div className="cards">
      <Link to={`interviews/${id}`} className="nav-link">
        <div>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <p style={{ marginBottom: 0 }}>Link: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
      </Link>
    </div>
  );
}
