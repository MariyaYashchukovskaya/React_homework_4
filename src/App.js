import React, { useEffect } from "react";
import { useState} from "react";
import { Posts } from "./components/Posts/Posts";
import { Form } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal"


import './App.css';
import { MyButton } from "./components/UI/MyButton";
import {PostService} from "./components/API/PostServer"

function App() {   
  const [posts, setPosts]=useState([])
  const [selectedPost, setSelectedPost] =useState('')
  const [isModalActive, setIsModalActive] =useState(false)
  const [checkedMessage, setСheckedMessage] =useState('')
  const [isPostLoading, setIsPostLoading] = useState(false)

useEffect(()=>{
fetchData();
},[])

  const addPost = (post) =>{
    setPosts([post, ...posts])
    setIsModalActive(false)
  }

  const onClickDelete=(id)=>{
    let array=posts.filter((post) => post.id !== id)
    setPosts(array);   
  }

  const onChangeSelect=(sortValue)=>{
    setSelectedPost(sortValue)    
    if (sortValue==='city'){
      
      let newPostsAddress=[...posts].sort((a,b)=>{
          return a.address[sortValue].localeCompare(b.address[sortValue])
      })
      
      setPosts(newPostsAddress)
    }
   let newPosts=[...posts].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]))
    setPosts(newPosts)
}


    const showChekedMessage=(message)=>{  
    setСheckedMessage(message)  
    console.log(message)
  }

  async function fetchData(){
    setIsPostLoading(true)
    setTimeout(async()=>{
      const posts =await PostService.getAllPosts()
      setPosts(posts) 
      setIsPostLoading(false)
    },1000)
      
  }

  return (
    <div className="App">
      <div className="container">      
        <div className="formCreate">
          <h1>Нажмите на кнопку, чтобы создать пользователя</h1>
          <MyButton onClick={()=>setIsModalActive(true)}>Создать</MyButton>
          
        </div>

        <div className="checkedMessage">{checkedMessage}</div> 
        
        <Modal visible={isModalActive} setVisible={setIsModalActive}>
        <Form addPost={addPost}/>
        </Modal>
        <div  className="title">
       <div className="inputNone"></div> 
          <p onClick={(event)=>onChangeSelect("name")}>name</p>
          <p onClick={(event)=>onChangeSelect("username")}>username</p>
          <p onClick={(event)=>onChangeSelect("email")}>email</p>          
          <p onClick={(event)=>onChangeSelect("city")}>address</p>          
               
        <div className="btnNone"></div>
    </div>  

        <div>
        {isPostLoading
        ?<div>LOADIND</div>
        :<div>

        {posts.length !==0
        ?<Posts posts={posts} onClickDelete={onClickDelete} showChekedMessage={showChekedMessage}/>
        :<h2>Список пуст</h2>
        } 

        </div>}
        </div>
              
       </div>            
    </div>
  );
}

export default App;
