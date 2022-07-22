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

    const [cards, setCards] = useState(null);
    const [pickFile, setpickFile] = useState(false)
    const [selectedFile, setSelectedFile] = useState("/images/card-icon.png");

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
    
    const handleChose = (event) =>{
        const imgFile = event.target.files[0].type;
        const cardType = cards.type;
        setSelectedFile(event.target.files[0]);
        if(imgFile == cardType){
            setpickFile(true);      

        }else{
            alert("Please Choose the correct File");
            setpickFile(false);
        }
        
    }

    

    
    const handleRemove = () =>{
        setpickFile(false);
    }

    if (!cards) {
        return<div className="loader">
            <h1>Loading</h1>
        </div>
         
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

                    {
                        pickFile ?(
                            
                            
                            <div className="detail-hero-content-butn">
                                
                                  
                                
                                <p>{selectedFile.name}</p>
                                <a className='btn btn-outline-danger' onClick={handleRemove}>Remove</a>
                                <Button className='btn btn-primary'><i className="fa fa-download"></i> Download</Button>
                            </div>

                        ):
                        (
                        <div className="detail-hero-content-nav">
                    
                            <label htmlFor="inputTag">
                                CHOOSE FILE
                                <input id="inputTag" type="file"  onChange={handleChose}  className="detail-hero-content-nav-home-btn"/>
                                
                            </label>
    
                        </div> 

                        )

                    }

             </div>
        </div>
        
        <Footer />
    </div>
  )
}
