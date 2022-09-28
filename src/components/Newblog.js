import { db } from "../firebase/config";
import {
     collection,addDoc
  } from 'firebase/firestore';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

  


const Newblog = () => {


   

    const colRef = collection(db, 'Blogs');

    const history = useHistory();

    // adding doc to database hopefully
    
    useEffect(()=>{
        
        const addBlogForm = document.querySelector('.add');
        addBlogForm.addEventListener('submit', (e) => {
            console.log('this function has run')
            e.preventDefault()
           
    
            addDoc(colRef, {
                Title: addBlogForm.Title.value,
                Author: addBlogForm.Author.value,
                Contents: addBlogForm.Contents.value
            })
            .then(()=>{
                addBlogForm.reset()
                history.push('/')
            })
        })
    },[])

    // useEffect(()=>{
                
    //     getDocs(colRef)
    //     .then(snapshot => {
    //     let Blogs = []
    //     snapshot.docs.forEach((doc) => {
    //         Blogs.push({...doc.data(),id: doc.id})
    //     })
    //     console.log(Blogs)
    //     setPosts(Blogs)
    //     })
    //     .catch(err => {
    //     console.log(err.message)
    //     })
    // },[])

    return (  
        <div className="new-blog">
          
          <div className="new-blog-back">
            <form className="add">
                <h2>Add New Blog</h2>
                <input type="text"
                    placeholder="Title"
                    required
                    name="Title"     
                /> <br />
                <input type="text" 
                    placeholder="Author"
                    required
                    name="Author"     
                /> <br />
                <input type="text" 
                    placeholder="Blog Contents"
                    required
                    name="Contents"   
                /> <br />
                <button>Add</button>
            </form>
          </div>
        </div>

    );
}
 
export default Newblog;