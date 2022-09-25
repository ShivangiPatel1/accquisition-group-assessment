import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";
import Stories from "./Components/Stories/Stories";
import axios from "axios";
import { PostsURL, UsersURL } from "./Constants";
function App() {
  const [postsData, setPostsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get(PostsURL).then((res) => {
      setPostsData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(UsersURL).then((res) => {
      setUsersData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Header usersData={usersData}></Header>
      <main>
        <div className="container">
          <Stories usersData={usersData} />
          {postsData.map((post) => {
            return (
              <Post
                key={post.id}
                userName={post.userName}
                profilePicture={post.profilePicture}
                storyBorder={true}
                image={post.img}
                caption={post.caption}
                comments={post.comments}
                likedBy={post.likedBy}
                likedByNo={post.likedByNo}
                hours={post.hours}
                likedByImg={post.likedByImg}
                usersData={usersData}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
