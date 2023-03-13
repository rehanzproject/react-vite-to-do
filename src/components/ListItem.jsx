import React from 'react'
import './ListItem.css'
const ListItem = ({no , title, onDelete}) => {
  return (
    <div className='listItem__content'>
        <div className="listItem__no">
            {no}
        </div>
        <div className="listItem__title">
            {title}
        </div>
        <div className="listItem__action">
            <button onClick={onDelete}>Delete</button>
        </div>
        
    </div>
  )
}

export default ListItem