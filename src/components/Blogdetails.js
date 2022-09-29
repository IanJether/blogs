// import { collection, onSnapshot } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { db } from "../firebase/config";




// const Blogdetails = () => {
//     const colRef = collection(db, 'Blogs');

//     const [posts,setPosts] = useState([]);
        
//     useEffect(()=>{
                
//       onSnapshot(colRef, (snapshot) => {
//         let Blogs = []
//         snapshot.docs.forEach((doc) => {
//             Blogs.push({...doc.data(),key: doc.id})
//         })
//         console.log(Blogs)
//         setPosts(Blogs)
//         })
//     },[])

//     const Handledelete = () => {

//     }

//     return ( 
//         <div className="blogdetailss">
           
//             <div className="blogtitle">
//                 <h2>{posts.Title}</h2>
//             </div>
//             <div className="blogauthor">
//                 <p>Written by {posts.Author}</p>
//             </div>
//             <div className="blogblog">
//                 <p>{posts.Contents}</p>
//             </div>
//             <div className="deletebutton">
//                 <button onClick={Handledelete} >Delete</button>
//             </div>
//         </div>
//      );
// }
 
// export default Blogdetails;