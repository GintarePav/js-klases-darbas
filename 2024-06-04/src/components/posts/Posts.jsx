import Post from "../post/Post";

const Posts = ({data}) => {
    return(
        <section className="p-4">
            <div className="container">
                <div className="row">
                    {data.map((post) => 
                        <Post 
                        title={post.title}
                        about={post.about}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Posts;