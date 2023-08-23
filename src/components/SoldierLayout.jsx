

import React, { useEffect, useState } from 'react';
import './Layout.css'
import { Link, Outlet } from 'react-router-dom';
import { CDBModalFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import LogoutIcon from '@mui/icons-material/Logout';

export const SoldierLayout = () => {

const [isLogIn, setIsLogIn] = useState(localStorage.getItem('loginData'));    
const [loginNav, setLoginNav] = useState("");
const [linkto, setLinkto] = useState("");

useEffect(() => {
  setLoginNav(loginState())
}, [isLogIn]);

function loginState() {
  if (!isLogIn) {
    console.log(isLogIn);
    setLinkto("/Login")
    return <Link to="/" className="link navLink">Login</Link>
  }
  else{
    setLinkto("/Myevents")
    return <div id="logoutBtn" className="navLink" onClick={()=>{
      localStorage.removeItem('loginData'); 
      setIsLogIn(false)
      const url = `/`;
      history.pushState({}, "", url);
      location.reload()
    }
  
  }>
    <LogoutIcon/>
    </div>
  }
  
}

  return (
    <div id='body-container'>
      <nav id='navbar'>
        <Link to='/Soldier' className="link"><img className="logo" src="../../logo.jpg" alt="MindGames Logo" /></Link>

        <div className="nav-title"><Link to='/Soldier' className="link navLink">בית</Link><span></span></div>
        <div className="nav-title"><Link to='/Soldier/SweetHome' className="link navLink">בית חם</Link><span></span></div>
        <div className="nav-title"><Link to='/Soldier/WalkingWith' className="link navLink">צועדים איתך</Link><span></span></div>
        <div className="nav-title"><Link to='/Soldier/WarmShoulder' className="link navLink">כתף חמה</Link><span></span></div>
        
      {loginNav}
        
      </nav>
      <div id="under-nav">


        <div id='outlet'>
          <Outlet />
        </div>




        <CDBModalFooter className="shadow" style={{ backgroundColor: '#E0E1DD' }}>
          <CDBBox display="flex" flex="column" className="mx-auto " style={{ width: '90%', paddingBottom: "1.5rem", paddingTop: "1.5rem" }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
              <CDBBox>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img className="logo" src="../../logo.jpg" alt="MindGames Logo" />
                </a>
                <p className="my-3" style={{ width: '250px' }}>
                HandByHand is an organization dedicated to making a positive impact on communities by extending a helping hand to those in need, promoting unity and compassion.
                </p>
                <CDBBox display="flex" className="mt-4">
                  <CDBBtn flat color="dark">

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <CDBIcon fab icon="facebook-f" style={{ color: 'white' }} />
                    </a>
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <CDBIcon fab icon="twitter" style={{ color: 'white' }} />
                    </a>
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <CDBIcon fab icon="linkedin-in" style={{ color: 'white' }} />
                    </a>

                  </CDBBtn>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                HandByHand
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>

                 <Link to='/' scroll={{top: 100, left: 100,behavior: "smooth"}}>About us</Link>
                  <Link to='/Contactus'> Contact</Link>

                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                  Help
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>

                  <Link to='/Login'>Sign In</Link>    
                  <Link to='/Signup'>Sign up</Link>

                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                  Products
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>

                  <a href="https://group.mercedes-benz.com/innovation/design/design-philosophy.html" target="_blank" rel="noopener noreferrer">
                    Windframe
                  </a>
                  <a href="https://group.mercedes-benz.com/innovation/design/design-philosophy.html" target="_blank" rel="noopener noreferrer">
                    Loop
                  </a>
                  <a href="https://group.mercedes-benz.com/innovation/design/design-philosophy.html" target="_blank" rel="noopener noreferrer">
                    Contrast
                  </a>
                </CDBBox>
              </CDBBox>
            </CDBBox>
            <small className="text-center" >&copy; MindGames Ltd</small>

          </CDBBox>
        </CDBModalFooter>
      </div>
    </div>
  );
}
