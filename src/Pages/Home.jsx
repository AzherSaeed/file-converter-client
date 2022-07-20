import React, { Component } from 'react'
import ContentCard from '../components/home/ContentCard'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'

import fiximg from"../assets/img/fixed-log.svg";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="fixd-img">
        <img src={fiximg} alt="" />
        </div>
        <Header />
        <ContentCard />
        <Footer />
      </div>
    )
  }
}

export default Home