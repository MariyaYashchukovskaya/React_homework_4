import React from 'react'
import { useState } from "react";
import { MyButton } from "../UI/MyButton";
import { MyInput } from "../UI/MyInput";

export function Form({addPost}) {
    const [name,setTitle] = useState('')
    const [email,setMessage] = useState('')
    const [username,setUsername] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [validationErrorTitle,setValidationErrorTitle]=useState('true')
    const [validationErrorMessage,setValidationErrorMessage]=useState('true')
    

    const onSubmitPost =(event)=>{
        event.preventDefault()
        if (validationErrorTitle==='true' 
        && validationErrorMessage ==='true'
        && name!==''
        && email!==''){
    
          const post={
            id: Date.now(),
            name:name,
            email:email,
            username: username,
            address: {
              city: city,
              street: street             
              
          }
        }
        
          addPost(post)
          setTitle('') 
          setUsername('')     
          setMessage('')
          setCity('')
          setStreet('')
        }     
        
      }

    const onChangeTitle =(event)=>{  
        const { value } =event.target
        if (value.length>=6 || value.length===0 ){      
          setValidationErrorTitle('false')      
        }else if (value.length<6){
          setValidationErrorTitle('true')     
        }
        setTitle(value)  
      }

    const onChangeUsername =(event)=>{  
        const { value } =event.target  
        setUsername(value)  
      }

    const onChangeCity =(event)=>{  
        const { value } =event.target  
        setCity(value)  
      }
    const onChangeStreet =(event)=>{  
        const { value } =event.target  
        setStreet(value)  
      }

    
      const onChangeMessage =(event)=>{  
        const { value } =event.target
        if (value.length>=16 || value.length===0){      
          setValidationErrorMessage('false')      
        }else if (value.length<16){
          setValidationErrorMessage('true')  
        }
        setMessage(value)
      }

  return (
    <form>
    <h2>Создайте свой пост</h2>
    <label htmlFor="name">Имя пользователя</label>
    <MyInput type="text"   
    id="name"            
    placeholder="Введите имя пользователя"
    value= { name }
    onChange={ onChangeTitle }/>
    <span className={validationErrorTitle}>Колл-во символов от 1 до 5.</span>

    <label htmlFor="username">Никнейм</label>
    <MyInput type="text"   
    id="username"            
    placeholder="Введите никнейм"
    value= { username }
    onChange={ onChangeUsername }/>
    {/* <span className={validationErrorTitle}>Колл-во символов от 1 до 5.</span> */}

    <label htmlFor="city">Город</label>
    <MyInput type="text"   
    id="city"            
    placeholder="Введите город"
    value= { city }
    onChange={ onChangeCity }/>
    {/* <span className={validationErrorTitle}>Колл-во символов от 1 до 5.</span> */}

    <label htmlFor="street">Улица</label>
    <MyInput type="text"   
    id="street"            
    placeholder="Введите улицу"
    value= { street }
    onChange={ onChangeStreet }/>
    {/* <span className={validationErrorTitle}>Колл-во символов от 1 до 5.</span> */}

    <label htmlFor="message">Email</label>
    <MyInput type="text"
    id="email"        
    placeholder="Введите email"
    value= { email }
    onChange={ onChangeMessage }/>
    <span className={validationErrorMessage}>Колл-во символов от 1 до 15.</span>

    <MyButton onClick={ onSubmitPost } type="submit">Добавить</MyButton>
  </form>  
  )
}