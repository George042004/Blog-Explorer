import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import '../index.css';

const PostDetails = () => {
  const {id} = useParams();
  const [post,setPost] = useState(null);
  const [loader,setLoader] = useState(false);
  
  useEffect(()=>{
    async function fetching(){
        try{
          setLoader(true);
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await res.json();
          setPost(data);
        } 
        catch(err){
          console.log('failed to fecth post');
        }     
        finally{
          setLoader(false);
        }
    }
    fetching();
  },[id])
  return (
    <>
    {loader && <Loader />}

      {!loader && post && <div className='singlepost'>
          <h2 className='singletitle'>{post.title}</h2>
          <p className='singlebody'>{post.body}</p>
      </div>}
    </>
  )
}

export default PostDetails
