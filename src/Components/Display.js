import React from 'react'
import { useState ,useEffect } from 'react';
import business from '../assets/business.jpeg'
import meet from '../assets/meeting.jpeg'
import Loader from './Loader'
import PropTypes from 'prop-types'
import DisplayItems from './DisplayItems';

const Display = (props) => {

    
    // const [articles, setArticles] = useState([]);

    // const fetchData = async()=>{
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     setArticles(articles.concat(parseData.articles))
        
    //     }

    return (
        <div>


            {/* <div className="container">
                <div className="row">
                    {articles.map((elm) => {

                        return <div className="col-md-4 mt-4" key={elm.url}>
                            <DisplayItems title={elm.title} description={elm.body} />
                        </div>
                    })}

                </div>
            </div> */}

            <div className='container'>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={business} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={meet} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={business} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={meet} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={business} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Send voulpat virae id
                                eleifend. commodo...</h3>
                            <p className="card-text">Interdum pertium porritor nibh
                                cursus...</p>
                            <p>Mon,21,dec 2020 14:57 GMT</p>
                        </div>
                        <img className="card-img-top" src={meet} />
                    </div>
                </div>
            </div>
            <div className='next-btn'>
            <button className='btn'>1</button>
            <button className='btn'>2</button>
            <button className='btn'>3</button>
            </div>
        </div>
    )
}

export default Display