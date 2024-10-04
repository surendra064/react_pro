import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config';

function Allposts() {

    const [post,setpost]=useState([]);


    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            setpost(posts.documents)
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default Allposts
