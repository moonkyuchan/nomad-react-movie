import React from "react";
import PropTypes from "prop-types";
import "./style/Movie.scss";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movie_container">
      <img className="movie_poster" src={poster} alt={title} title={title} />
      <div className="movie_content">
        <p className="movie_title">{title}</p>
        <p className="movie_year">{year}</p>
        <p className="movie_summary">{summary.slice(0, 160)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
