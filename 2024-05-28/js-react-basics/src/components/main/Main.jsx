import Article from "../article/Article";
import PostsData from "../../data/PostsData";
import { useState } from "react";
import AddPost from "../addPost/AddPost";

// const Main = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   console.log(loggedIn);
//   const loginHandler = () => {
//     setLoggedIn(true);
//   };
//   return (
//     <main>
//       <div className="user">
//         {loggedIn ? (
//           <div className="hello">Labas</div>
//         ) : (
//           <button onClick={loginHandler}>Login</button>
//         )}
//         {/* <button onClick={loginHandler}>Login</button>
//                 {loggedIn && <div className="hello">Labas</div>}
//         */}
//       </div>
//       {PostsData.map((post) => (
//         <Article key={post.id} title={post.title} description={post.desc} />
//       ))}
//     </main>
//   );
// };

const Main = () => {
  const [submit, setSubmit] = useState(false);
  const submitHandler = () => {
    setSubmit(true);
  };
  const [posts, setPosts] = useState(PostsData);
  const handlePostData = (data) => {
    setPosts((prevData) => {
        return [data, ...prevData]
    })
    console.log(posts);
  };
  return (
    <>
      <section>
        <button onClick={submitHandler}>Add News</button>
        {submit && <AddPost onSave={handlePostData} />}
      </section>
      <main>
        {posts.map((post) => (
          <Article key={post.id} 
          title={post.title}
          description={post.desc} />
        ))}
      </main>
    </>
  );
};

export default Main;

/* <Article
            title="Naujiena 1"
            content="Puiki diena"></Article>
            <Article
            title="Naujiena 2"
            content="Labai puiki diena"></Article>
            <Article
            title="Naujiena 3"
            content="Labai labai puiki diena"></Article>
            <Article
            title="Naujiena 4"
            content="Tikrai diena"></Article> */
