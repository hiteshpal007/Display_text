import React from 'react'
import { useState } from 'react';

const Delete = () => {
    const [list, setList] = useState([]);
  
    const handleRemove = () => {
        const items = list;
        if (items.length > 0) {
            const lastIndex = items.length - 1;
            setList(items.filter((item, index) => index !== lastIndex));
        }
    };
 
 
    return (
    <>
     <div>
        <button onClick={handleRemove}>Remove</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Delete