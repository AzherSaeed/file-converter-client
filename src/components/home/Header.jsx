
import React, { Component, Fragment } from 'react'
import { Container,Button } from 'react-bootstrap'

export class Header extends Component {
    state= {
        closetoggle : true
    }
  render() {
    this.toggerHandler = () => {
        this.setState({closetoggle: !this.state.closetoggle})
    }
    return (
      <Fragment>
        <div className="hero">
            <div className='header'>
                <div className="header-logo">
                    <a href="#">untools</a>
                </div>
                <div className="header-toggle">
                <i onClick={this.toggerHandler} className={this.state.closetoggle ? 'fa fa-bars' : 'fa fa-times'}></i>
                </div>
                <div className={this.state.closetoggle ? 'header-nav ' : ' header-navopen'}>
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
                    <Button className="hero-content-nav-sys-btn">Systems thinking</Button>
                    <Button className="hero-content-nav-dis-btn">Decision making</Button>
                    <Button className="hero-content-nav-pro-btn">problem solving</Button>
                    <Button className="hero-content-nav-com-btn">communication</Button>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default Header