
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link} from "react-router-dom";
import HeaderNav from '../common/HeaderNav';

export default function Header() {
    const axios = require('axios');

    const [cards, setCards] = useState([]);
    const [filteredCard, setfilteredCard] = useState([])



    useEffect(() => {

        axios.get('http://localhost:8000/cards')
            .then(function (response) {
                // handle success
                setfilteredCard(response.data)
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
    const filterItems = (cate) => {
        if (cate) {
            setfilteredCard(cards)
            const updateCards = cards.filter((cruntEle) => {
                return cruntEle.category === cate && cate;
            })
            setfilteredCard(updateCards);
        }
        else {
            setfilteredCard(cards)
        }

    }


    return (
        <div>
            <div className="hero">
                <HeaderNav />
                <div className="hero-content">
                    <div className="hero-content-heading">
                        <h1>Tools for better thinking</h1>
                    </div>
                    <div className="hero-content-des">
                        <p>Collection of thinking tools and frameworks to help you solve
                            problems, make decisions and understand systems.</p>
                    </div>
                    <div className="hero-content-nav">
                        <Button className="hero-content-nav-home-btn" onClick={() => filterItems()} >All</Button>
                        <Button className="hero-content-nav-sys-btn" onClick={() => filterItems('SYSTEMS THINKING')}>Systems thinking</Button>
                        <Button className="hero-content-nav-dis-btn" onClick={() => filterItems('DECISION MAKING')}>Decision making</Button>
                        <Button className="hero-content-nav-pro-btn" onClick={() => filterItems('PROBLEM SOLVING')}>problem solving</Button>
                        <Button className="hero-content-nav-com-btn" onClick={() => filterItems('communication')}>communication</Button>
                        <Button className="hero-content-nav-dis-btn" onClick={() => filterItems('PDF Tools')}>PDF Tools</Button>
                    </div>
                </div>
            </div>
            <div className='main-content'>
                {
                    filteredCard.map((ele) => {
                        const { id, title, image, desc, category, categorysty } = ele;
                        return (
                            <div className="main-content-card" key={id}>
                                <Link  to={category === "PDF Tools" ? `/detail/${id}` : '/'}>

                                <img src={image} alt="" />

                                <h2 className="main-content-card-heading">
                                    {title}
                                </h2>
                                <label className={`main-content-card-${categorysty}`}>{category}</label>
                                <p>
                                    {desc}
                                </p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
