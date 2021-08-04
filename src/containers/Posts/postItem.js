import React from 'react'

export default function PostItem({ post }) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <img src={post.imageUrl} className="card-img-top" alt={post.title} />
                <h5 className="card-header">{post.launches.length > 0 ? "Launched" : "Under Development"}</h5>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{`${post.summary.slice(0,50)}...`}</p>
                    <a href={post.url} className="btn btn-primary">More</a>
                </div>
            </div>
        </div>
    )
}
