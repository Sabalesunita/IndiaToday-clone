import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {

    return (
      <div>
        <nav id="Navbar_main">
        <a href="/">IndiaToday</a>
        <a href="/">   Malayalam</a>
        <a href="/">    Business Today</a>
        <a href="/">   DailyO</a>     
        <a href="/">    Aaj Tak</a>
        <a href="/">   Lallantop</a> 
        <a href="/">    Bangla</a>
        <a href="/">   GNTV</a>
        <a href="/">   iChowk</a>
        <a href="/">    Reader's Digest</a>    
        </nav>
      </div>
    );
  }