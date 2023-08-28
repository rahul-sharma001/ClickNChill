import { Link } from "react-router-dom";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
        // to listen scroll
        window.onscroll  = ()=>{
            setIsScrolled(window.pageYOffset===0?false:true);
            return () => (window.onscroll=null);
        };
        console.log(isScrolled);
    return (
        
        <div className={isScrolled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                  <span className="text"><b>Click&Chill</b></span>
                  <Link to ="/"className="link"><span>Homepage</span></Link>
                  <Link to ="/series"className="link"><span>Series</span></Link>
                  <Link to="/movies"className="link"><span>Movies</span></Link>
                  
                  <span>New and Popular</span>
                  <span>My List</span>
                </div>

                <div className="right">
                  <Search className="icon"/>
                  <span>KIDS</span>
                  <Notifications className="icon"/>
                  <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Profile"/>
                  <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                        <span>Settings</span>
                        <Link className = "link" to ="/login"><span>Logout</span></Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Navbar
