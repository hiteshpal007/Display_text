import React from 'react'
import meet from '../assets/meeting.jpeg'


const DisplayItems = (props) => {

    let {title, body} = props;
    
    return (
        <div>
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="card-text">Mon,21,dec 2020 14:57 GMT</p>
                <img className="card-img-top" src={meet} />
            </div>
            </div>
        </div>
    )

}

export default DisplayItems
