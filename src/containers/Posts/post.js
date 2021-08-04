import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner/spinner'
import { getPosts } from '../../actions/secondAction'
import PostItem from './postItem'

export default function Post() {
    const loading = useSelector(state => state.post.loading);
    const posts = useSelector(state => state.post.posts);
    const error = useSelector(state => state.post.error);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    if(loading) {
        return <Spinner />
    }
    if(error) {
        return <h4>{error}</h4>
    }
    return (
        <>
            <h3 className="display-1">NEWS</h3>
            <div className="row">
                {posts.map(post => <PostItem key={post.id} post={post} />)}
            </div>
        </>
    )
}
