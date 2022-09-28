import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import {
    getDocs,collection,onSnapshot
 } from 'firebase/firestore';

 
 const Blogpost = () => {
        
         const colRef = collection(db, 'Blogs');
        
         const [posts,setPosts] = useState([]);
        
            useEffect(()=>{
                        
              onSnapshot(colRef, (snapshot) => {
                let Blogs = []
                snapshot.docs.forEach((doc) => {
                    Blogs.push({...doc.data(),key: doc.id})
                })
                console.log(Blogs)
                setPosts(Blogs)
                })
            },[])


        return (  
            <div className="blogpost">
                {posts.map((post) => 
                    <div key={post.id} className="blogdetails">
                        <h2>{post.Title}</h2> <br />
                        <p>Written by {post.Author}</p> <br />
                    </div>
                )}
            </div>
        );
    }
     
    export default Blogpost;
   