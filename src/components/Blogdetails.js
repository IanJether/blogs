import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../firebase/config";




const Blogdetails = () => {

    const [idd,setIdd] = useState([]);

    const { id } = useParams();

    const docRef = doc(db, 'Blogs', `${id}`);

    const history = useHistory();


    onSnapshot(docRef, (doc) => {
        setIdd(doc.data())
    })


    
    useEffect(()=>{

        const deleteBook = document.querySelector('.delete');
        deleteBook.addEventListener('click', (e) => {
           
            e.preventDefault();

            const docRef = doc(db, 'Blogs', `${id}`);

            deleteDoc(docRef)
                .then(()=>{
                    history.push('/');
                })
        })
       },[])

    

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
            <div className="delete">
                <button>Delete Blog</button>
            </div>
        </div>
    );
}
 
export default Blogdetails;