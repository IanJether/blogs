import { Link } from "react-router-dom";





const Navbar = () => {

     const linkStyle = {
          textDecoration: "none",
          color: 'white'
        };

    return ( 
        <div className="navbarcont">
            <div className="navbar">
               <div className="navtext">
                    <h2>Jether Blogs</h2>
               </div>
               <div className="navbutton">
                    <button className="newblog"> <Link to="/Newblog" style={linkStyle}>New Blogs </Link> </button>
                    <button className="homebutton"> <Link to="/" style={linkStyle}>Home</Link> </button>
               </div>
            </div>
        </div>
     );
}

export default Navbar;