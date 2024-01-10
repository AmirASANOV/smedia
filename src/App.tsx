import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/Post/Post";
import Login from "./pages/login/Login";
import PostList from "./components/PostList/PostList";
import Registration from "./pages/registration/Registration";
import axios from "axios";
import { useEffect } from "react";
import { setPosts, setStatus } from "./store/posts";
import { useDispatch } from "react-redux";
import { StateStatus } from "./types/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(StateStatus.pending));

    axios
      .get("http://api.social_network.lvh.me/posts/profiles/2")
      .then(function (response) {
        dispatch(setPosts(response.data.posts));
        dispatch(setStatus(StateStatus.fulfilled));
      })

      .catch(function (error) {
        console.log(error);
        dispatch(setStatus(StateStatus.rejected));
      });
  }, []);

  return (
    <div className="App">
      <PostList />
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
