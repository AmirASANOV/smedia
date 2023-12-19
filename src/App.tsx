import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/Post/Post";
import Login from "./pages/login/Login";
import PostList from "./components/CardList/PostList";
import Registration from "./pages/registration/Registration";

function App() {
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
