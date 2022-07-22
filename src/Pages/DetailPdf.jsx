import React from 'react'
import HeaderNav from '../components/common/HeaderNav'
import Footer from '../components/home/Footer'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function DetailPdf() {
    const {id} = useParams();
    const axios = require('axios');

    const [cards, setCards] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/cards/${id}`)
            .then(function (response) {
                // handle success
               
                setCards(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    if (!cards) {
        return <h1>Loading</h1>
    }
  
 
  return (
    <div>
        <div className="detail-hero">
            <HeaderNav />
            <div className="detail-hero-content">
                    <div className="detail-hero-content-heading">
                        <h1>{cards.title}</h1>
                    </div>
                    <div className="detail-hero-content-des">
                        <p>{cards.desc}</p>
                    </div>
                    <div className="detail-hero-content-nav">
                        
                        <label for="inputTag">
                            CHOOSE FILE
                            <input id="inputTag" type="file"  className="detail-hero-content-nav-home-btn"/>
                        </label>

                       

                    </div>
                    <div className="detail-hero-content-butn">
                    <Button className='btn btn-primary'><i className="fa fa-download"></i> Download</Button>
                    </div>
             </div>
        </div>
        
        <Footer />
    </div>
  )
}
