
import React ,{ useState } from 'react'
import {Button } from 'react-bootstrap'

export default function Header() {
    const [closetoggle, setclosetoggle] = useState(true);
    const toggerHandler = () => {
         setclosetoggle(!closetoggle);
    }
  return (
    <div className="hero">
    <div className='header'>
        <div className="header-logo">
            <a href="#">untools</a>
        </div>
        <div className="header-toggle">
        <i onClick={() => toggerHandler()} className={closetoggle ? 'fa fa-bars' : 'fa fa-times'}></i>
        </div>
        <div className={closetoggle ? 'header-nav' : 'header-navopen'}>
            <a href="#">Tools guide</a>
            <a href="#">Templates</a>
            <a href="#">App</a>
            <a href="#">About</a>
            
        </div>

    </div>
    <div className="hero-content">
        <div className="hero-content-heading">
            <h1>Tools for better thinking</h1>
        </div>
        <div className="hero-content-des">
                <p>Collection of thinking tools and frameworks to help you solve
        problems, make decisions and understand systems.</p>
        </div>
        <div className="hero-content-nav">
            <Button className="hero-content-nav-home-btn">All</Button>
            <Button className="hero-content-nav-sys-btn" >Systems thinking</Button>
            <Button className="hero-content-nav-dis-btn">Decision making</Button>
            <Button className="hero-content-nav-pro-btn">problem solving</Button>
            <Button className="hero-content-nav-com-btn">communication</Button>
        </div>
    </div>
</div>
  )
}
