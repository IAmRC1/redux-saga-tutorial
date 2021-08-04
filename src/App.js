import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Counter, Post, RecipeImage, Movie, } from './containers'

export default function App() {
    return (
        <>
            <ToastContainer />
            <div className="container">
                <Counter
                    increment={10} 
                    decrement={20}
                />
                <hr />
                <Movie />
                <hr />
                <RecipeImage />
                <hr />
                <Post />
            </div>
            
        </>
    );
}
