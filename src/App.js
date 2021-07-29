import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./style/App.scss";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="app_section">
        {isLoading ? (
          <div className="loader_wrap">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <>
            <div className="page_title">Moon's Pick !</div>
            <div className="movie_wrap">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
