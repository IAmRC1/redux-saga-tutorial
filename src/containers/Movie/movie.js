import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/spinner'
import { getMovie } from '../../actions/fourthAction'

export default function Movie() {
    const loading = useSelector(state => state.movie.loading);
    const movies = useSelector(state => state.movie.movies);
    const error = useSelector(state => state.movie.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovie())
    }, []);

    if(loading) {
        return <Spinner />
    }
    if(error) {
        return <h4>{error}</h4>
    }
    return (
        <>
            <h3 className="display-1">MOVIE DB</h3>
            <ul className="list-group">
                {movies.map(movie => {
                    return (
                        <li key={movie._id} className="list-group-item d-flex justify-content-between align-items-center">
                            {movie.name}
                            <span className="badge bg-primary rounded-pill text-white">{movie.boxOfficeRevenueInMillions}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
