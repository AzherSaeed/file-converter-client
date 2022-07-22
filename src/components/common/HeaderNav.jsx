import { useState } from 'react';

export default function HeaderNav() {
    const [closetoggle, setclosetoggle] = useState(true);
   

    const toggerHandler = () => {
        setclosetoggle(!closetoggle);
    }
  return (
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
  )
}
