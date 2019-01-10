import React from 'react'

export default ({id,detail,note,date}) => {
    
    return (
        <div>
            <p>{detail}</p>
            <p>{note}-{date}</p>
        </div>)
}
