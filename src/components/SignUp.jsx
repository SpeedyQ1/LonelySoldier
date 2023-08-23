import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import "./SingUp.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
function SignUp() {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [theName, setTheName] = useState("");
    const [lastName, setLastName] = useState("");
    const [usersArray, setUsersArray] = useState(JSON.parse(localStorage.getItem("usersArr")));
  
    const handleLogin = (e) => {
      e.preventDefault();
    
      if (!usersArray.some((user) => user.email === username)) {
        const newUser = {
          email: username,
          password: password,
          name: theName,
          lastName: lastName 
        };
    
        const usersArr = [...usersArray, newUser];
        localStorage.setItem('usersArr', JSON.stringify(usersArr));
    
        setUsername('');
        setPassword('');
        setSubmitted(true);
      } else {
        alert('This email is already taken');
      }
    };
    
  
    const handleNewForm = () => {
      setSubmitted(false);
    };
  
    return (
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard
              className='text-white my-5 mx-auto'
              style={{ borderRadius: '1rem', maxWidth: '400px' }}
            >
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                {submitted ? (
                  <>
                    <h2 className="fw-bold mb-2 text-uppercase">החשבון נוצר</h2>
                    <p className="text-white-50 mb-5"> 
                    <Link to="/" > תתחבר</Link>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="fw-bold mb-2 text-uppercase">הירשם</h2>
                    <p className="text-white-50 mb-5">תמלא בבקשה את השדות הבאים</p>
                    
                    <MDBInput
                      wrapperClass='mb-4 mx-5 w-100'
                      labelClass='text-white'
                      label='אי-מייל'
                      id='emailFormControlLg'
                      type='email'
                      size="lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div id='full-name-section'>
                    <MDBInput
                      // wrapperClass='mb-4 mx-5 w-100'
                      labelClass='text-white'
                      label='שם פרטי'
                      type='text'
                      size="lg"
                      value={theName}
                      onChange={(e) => setTheName(e.target.value)}
                    />
                    <MDBInput
                      // wrapperClass='mb-4 mx-5 w-100'
                      labelClass='text-white'
                      label='שם משפחה'
                      type='text'
                      size="lg"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    </div>
                    <MDBInput
                      wrapperClass='mb-4 mx-5 w-100'
                      labelClass='text-white'
                      label='סיסמה'
                      id='passwordFormControlLg'
                      type='password'
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='logBtn' onClick={handleLogin}>הירשם</button>
                      
                    <div>
                      <p className="mb-0" id='dontHaveAccount'>כבר יש לך משתמש <Link to="/">התחבר</Link></p>
                    </div>
                   
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
}

export default SignUp
