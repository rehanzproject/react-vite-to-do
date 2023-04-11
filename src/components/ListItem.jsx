import React from 'react'
import './ListItem.css'
const ListItem = ({no , title, onDelete, onEdit}) => {
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
        <div className="listItem__edit">
            <button onClick={onEdit}>Edit</button>
        </div>
        
    </div>
  )
}

export default ListItem