import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { db } from "../firebase/config";





const Blogdetails = () => {

    const [idd,setIdd] = useState([]);

    const { id } = useParams();

    const docRef = doc(db, 'Blogs', `${id}`);



    onSnapshot(docRef, (doc) => {
        setIdd(doc.data())
    })


    
    const handledelete = () =>{
        
        const docRef = doc(db, 'Blogs', `${id}`);
        
        deleteDoc(docRef)
        .then(()=>{          
              console.log('Deleted')
            })
    }


    // useEffect(()=>{

    //     const deleteBook = document.querySelector('.delete');
    //     deleteBook.addEventListener('click', (e) => {
    //         e.preventDefault();
            
    //     })
    //    },[])

    

    return (
        <div className="blogfall">
            <div className="blogfalltitle">
                <h4>{idd.Title}</h4>
            </div>
            <div className="blogfallsauthor">
                <p>Written by {idd.Author}</p> <br />
            </div>
            <div className="blogfallcontent">
                <p>{idd.Contents}</p>
            </div>
            <div className="delete" onClick={handledelete}>
                <Link to="/"><button>Delete Blog</button> </Link>
            </div>
        </div>
    );
}
 
export default Blogdetails;