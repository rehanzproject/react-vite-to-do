import React from 'react'
import './ListHeader.css'
const ListHeader = ({no , title , option}) => {
  return (
    <div>
        <div className="listHeader__content">
            <div className="listHeader__no">{no}</div>
            <div className="listHeader__title">{title}</div>
            <div className="listHeader__option">{option}</div>
        </div>
    </div>
  )
}

export default ListHeader