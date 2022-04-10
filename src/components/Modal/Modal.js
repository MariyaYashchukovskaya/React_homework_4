import React from 'react'
import style from './Modal.module.css'

export function Modal ({children, visible, setVisible}) {

    const rootClasses =[style.myModal]
    if (visible){
        rootClasses.push(style.active)
    }
    return (
      <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
        <div className={style.myModalContent} onClick={(event)=>event.stopPropagation()}>
            {children}
            <button className={style.deleteBtn} onClick={()=>setVisible(false)}>✖</button>
        </div>
      </div>
    )
  
}