import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import {
    getDocs,collection,onSnapshot,orderBy,query
 } from 'firebase/firestore';
import { Link, useHistory, useParams } from "react-router-dom";




 
 const Blogpost = () => {
        
         const colRef = collection(db, 'Blogs');
        
         const [posts,setPosts] = useState([]);
        
         const history = useHistory();
       
       

         const q = query(colRef, orderBy('CreatedAt'))
        
            useEffect(()=>{
                        
              onSnapshot(q, (snapshot) => {
                let Blogs = []
                snapshot.docs.forEach((doc) => {
                    Blogs.push({...doc.data(),id: doc.id})
                })
                setPosts(Blogs)
                })
            },[])

        //   var slash = '/Newblog';
        //     const handlered = (e) => {
        //         e.preventDefault();
        //         history.push(slash)
        //     }

        const linkStyle = {
            textDecoration: "none",
            color: 'rgb(36, 109, 211)'
          };
  

        return (  
            <div className="blogpost">
                {posts.map((post) => 
                <Link to={post.id} style={linkStyle}>
                    <div  id={post.id} className="blogdetails">
                        <h2>{post.Title}</h2> <br />
                        <p>Written by {post.Author}</p> <br />
                    </div>
                </Link>
                )}
            </div>
        );
    }
     
    export default Blogpost;
   