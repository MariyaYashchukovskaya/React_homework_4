import { useState } from 'react';
import style from './Post.module.css'


export function Post({post, onClickDelete, showChekedMessage}) {
  const [checked, setChecked] = useState(false);
  const [textMessage, setTextMessage] =useState (post.name)
  

  const changeCheckbox =()=>{    
		setChecked(!checked);
    showMessage()
	}

  const showMessage=()=>{
    if(checked){
        
      setTextMessage(post.name)
    }else{
      setTextMessage('')
    }
    showChekedMessage(textMessage)
  }
  
  const rootClasses =[style.post]
  if (checked){
    rootClasses.push(style.checkedPost)
  }

   return (
    <div key={post.id} className={rootClasses.join(' ')}>
        <input className={style.inputPost} type="checkbox" id={post.id} checked={checked} onChange={changeCheckbox} />
          <p>{post.name}</p>
          <p>{post.username}</p>
          <p>{post.email}</p>          
          <p>{post.address.city},{post.address.city}</p>          
               
        <button className={style.btnRemove} id={post.id} onClick={()=>onClickDelete(post.id)}>Удалить</button>
    </div>  
  )
}



 