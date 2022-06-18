import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Signin } from './components/Auth/Signin/Signin';
import { Signup } from './components/Auth/Signup/Signup'
import { HomeMain } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<HomeMain/>}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
