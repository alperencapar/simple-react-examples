import React from 'react'
import { Link } from 'react-router-dom'

const BlogHomePage = () => {

    const blogs = 
        [
            {
                id:1,
                title: "Blog Başlığı 1",
                body: "blog body 1"
            },
            
            {
                id:2,
                title: "Blog Başlığı 2",
                body: "blog body 2"
            },
            
            {
                id:3,
                title: "Blog Başlığı 3",
                body: "blog body 3"
            },
            
            {
                id:4,
                title: "Blog Başlığı 4",
                body: "blog body 4"
            },
            
            {
                id:5,
                title: "Blog Başlığı 5",
                body: "blog body 5"
            }
        ]
    
    return (
        <div className="Blogs">
            <h1>All Blogs</h1>
            <div>
                {blogs.map((blog) => (
                    <div key={blog.id} >
                        <Link to={`/blogs/${blog.id}`}><h1>{blog.title} </h1></Link>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BlogHomePage
