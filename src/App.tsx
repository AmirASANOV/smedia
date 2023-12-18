import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardItem from "./components/Post/Post";
import Login from "./pages/login/Login";
import CardList from "./components/CardList/CardList";
import Registration from "./pages/registration/Registration";

function App() {
  return (
    <div className="App">
      <CardList />
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
