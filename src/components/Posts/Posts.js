import React from 'react'
import { Post } from '../Post/Post';

export const Posts = ({posts, onClickDelete, showChekedMessage}) => {
    
  return (
    <div>{posts.map((post) => (     
      
        <Post key={post.id} post={post} onClickDelete={onClickDelete} showChekedMessage={showChekedMessage}/>                
        ))}        
    </div> 
  )
}

