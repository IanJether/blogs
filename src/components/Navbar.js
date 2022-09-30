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
               <Link to="/Newblog" style={linkStyle}>  <button className="newblog"> New Blog  </button> </Link>
               <Link to="/" style={linkStyle}>   <button className="homebutton"> Home </button> </Link>
               </div>
            </div>
        </div>
     );
}

export default Navbar;