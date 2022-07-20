import React, { Component } from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';

export class AppRoute extends Component {
  render() {
    return (
      <div>
              <BrowserRouter>
                <Routes>
                
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
      </div>
    )
  }
}

export default AppRoute