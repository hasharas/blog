import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogDetails, setBlogs] = useState(null);
    
    const handleDelete = (id)=> {
        const newBlogs = blogDetails.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

        useEffect(() => {
           fetch('http://localhost:3000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setBlogs(data);
            });
        }, []);

    return ( 
        <div className="home">
          { blogDetails && < BlogList blogs={blogDetails} title="All Blogs!" handleDelete= {handleDelete} /> }
           
        </div>

     );
}
 
export default Home;