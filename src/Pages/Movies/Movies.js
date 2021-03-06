import axios from "axios";
import {useState, useEffect} from "react";
import Genres from "../../components/Genres/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import "./Movies.css";

const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}&with_genres=${genreforURL}`);
        
        
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        fetchMovies()
    }, [page, genreforURL]);

    return (
        <div>
            <span className='pageTitle'>Discover Movies</span>
            <Genres 
                type='movie'
                selectedGenres={selectedGenres}
                genres={genres}
                setGenres={setGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            />
            <div className="movies">
                {content && content.map((c) => (
                    <SingleContent 
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie" 
                        vote_average={c.vote_average} />
                ))}
            </div>
            {numOfPages>1 && (
            <CustomPagination
                setPage={setPage}
                numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies;
