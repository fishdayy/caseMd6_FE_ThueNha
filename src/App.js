import {Route,Routes} from "react-router-dom";
import Login from "./page/login";
import {useSelector} from "react-redux";
import Register from "./page/register";
import Home from "./page/home";
import './App.css';
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Footer from "./components/Footer";
import CreatePost from "./page/createPost";
import DetailPost from "./page/detailPost";
import Profile from "./page/profile";

function App() {

  let dataUser = useSelector(state => {
    return state.user.userNow
  })
  return (
      // <Routes>
      //   <Route path={'/'} element={<Register/>}></Route>
      //   <Route path={'/login'} element={<Login/>}></Route>
      //   {
      //     dataUser !=null ?
      //         <Route path={'/home'} element={<Home/>}>
      //         </Route>
      //         :
      //         <Route path="*" element={<Login/>}/>
      //   }
      //     <Route path={'/home'} element={<Home/>}/>
      // </Routes>
      //   <DetailPost/>
      // <Search/>
      // <Profile/>
      <Home/>
  );
}

export default App;
