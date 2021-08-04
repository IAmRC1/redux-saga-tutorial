import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/spinner'
import { getImage } from '../../actions/thirdAction'

export default function RecipeImage() {
    const loading = useSelector(state => state.recipeImage.loading);
    const image = useSelector(state => state.recipeImage.image);
    const error = useSelector(state => state.recipeImage.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImage())
    }, [dispatch]);

    if(loading) {
        return <Spinner />
    }
    if(error) {
        return <h4>{error}</h4>
    }
    return (
        <>
            <h3 className="display-1">RECIPE IMAGE</h3>
            <img src={image} alt={"pic"} className="img img-fluid" />
        </>
    )
}
