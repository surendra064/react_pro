import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'; 

function Editpost() {
      
    const {slug}=useParams()
    const [post,setpost]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        if(slug)
        {
            appwriteService.getPost({slug}).then((post)=>{
                if(post)
                {
                    setpost(post)
                }
                else{
                    navigate("/")
                }
            })
            
        }
    },[slug,navigate])



  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null

}

export default Editpost
