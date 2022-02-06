import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    return (
        <div>
            <h2>Specific Blog Page</h2>
            <div>
                <h1>Blog Title - {params.id}</h1>
                <p>Blog Content</p>
            </div>

            <div>
                <button onClick={() => navigate('/blogs')}>Return to Blogs</button>
            </div>
        </div>
        
    )
}

export default BlogPage
