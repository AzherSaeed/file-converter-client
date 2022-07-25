import {useEffect, useState} from 'react'
import HeaderNav from '../components/common/HeaderNav'
import Footer from '../components/home/Footer'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {saveAs} from 'file-saver'
import data from '../db.json';
import Spinner from 'react-bootstrap/Spinner';


export default function DetailPdf() {
    const {id} = useParams();
    const axios = require('axios');

    const [cards, setCards] = useState(null);
    const [pickFile, setpickFile] = useState(false)
    const [selectedFile, setSelectedFile] = useState("/images/card-icon.png");
    const [fileLoading, setFileLoading] = useState(false);


    useEffect(() => {
        const filteredCards = data.cards.find(card => card.id == id)
        setCards(filteredCards)
    },[data.cards])


    
    const handleChose = (event) =>{
        setFileLoading(true)
        const imgFile = event.target.files[0];
        const cardType = cards.type;
        setSelectedFile(event.target.files[0]);


        console.log(imgFile.type , cardType)
        const formData = new FormData();
        formData.append('file', imgFile);





            if (cardType ==  'application/pdf') {
                fetch('http://localhost:8080/api/officetopdf' , {
                    method: 'POST',
                    body:formData
                })
                    .then(async (res) =>{
                        setFileLoading(false)
                        console.log(res, 'here is ressponse')
                        if(res.status == 200){
                            const resp = await  res.blob();
                            saveAs(resp , `new${Date.now()}.docx`)
                        }
                        else {
                            alert('Please choose file with docx extension')
                        }

                    })
            }
            else {
                fetch('http://localhost:8080/api/fileUpload' , {
                    method: 'POST',
                    body:formData
                })
                    .then(async (res) =>{
                        setFileLoading(false)
                        console.log(res, 'here is ressponse')
                        if(res.status == 200){
                            const resp = await  res.blob();
                            saveAs(resp , `new${Date.now()}.pdf`)
                        }
                        else {
                            alert('Please choose file with pdf extension')
                        }

                    })

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
                    fileLoading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        : null
                }



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
                                <input disabled={fileLoading} id="inputTag" type="file"  onChange={handleChose}  className="detail-hero-content-nav-home-btn"/>
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
