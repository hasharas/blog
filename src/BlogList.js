


const BlogList = ({ blogs, title, handleDelete}) => {
   
     
    return (
       <div className="blog-list">
        <h2>{ title }</h2>
         {blogs && blogs.map((bg)=>(
        <div className="blog-preview" key={bg.id}>
            <h2>{ bg.title }</h2>
            <p>written by {bg.author}</p>
            <button onClick={()=>handleDelete(bg.id)}>delete blog</button>
        </div>
    ))}
       </div>
       );
}
 
export default BlogList ;