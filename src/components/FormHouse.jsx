import React, { useRef,useState } from 'react'
import './FormHouse.css'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function FormHouse({setNewFormClicked}) {
    const [submitted, setSubmitted] = useState(false);
    const [sweetHomeArr, setSweetHomeArr] = useState(JSON.parse(localStorage.getItem("sweetHomeArr")));

    
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const form = useRef();
    
    const toastifySuccess = (data) => {
      const { id,
      img , 
      name,
       lastName,
      condition,
      numberOfSouls,
      aboutUs, 
      contact,
      phone,
      location  ,
      conditions} = data;
  
      toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
      reset();
      setSubmitted(true);
    };
    const handleFormSubmit = (data, e) => {
        onSubmit(data);
        sendEmail(e);
      };
    
    
      const onSubmit = (data) => {
        console.log('Form Data:', data);
        let temp = [...sweetHomeArr, data];
         localStorage.setItem('sweetHomeArr', JSON.stringify(temp));
         setNewFormClicked(4)
         alert("נרשמת בהצלחה")
      };
    
      if (!submitted) {
        return (
          <div className="Contactus">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="Contactus">
                    <form
                      id="contact-form"
                      onSubmit={handleSubmit(handleFormSubmit)}
                      noValidate
                      ref={form}>
                      <div className="row formRow">
                        <div className="col-6">
                          <input
                            type="text"
                            name="name"
                            {...register('name', {
                              required: { value: true, message: 'Please enter your name' },
                              maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                              }
                            })}
                            className="form-control formInput"
                            placeholder="שם"
                          />
                          {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                        </div>
                        <div className="col-6">
                          <input
                            type="email"
                            name="id"
                            {...register('email', {
                              required: true,
                              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className="form-control formInput"
                            placeholder="כתובת אימייל"
                          />
                          {errors.email && (
                            <span className="errorMessage">הקלד אימייל תקין</span>
                          )}
                        </div>
                      </div>
                      <Link to='/Soldier/SweetHome'></Link>
                      {/* Row 2 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="text"
                            name="img"
                            {...register('img', {
                              required: { value: true, message: 'Please enter a subject' },
                              maxLength: {
                                value: 75,
                                message: 'add img'
                              }
                            })}
                            className="form-control formInput"
                            placeholder="הוסף תמונה"
                          />
                          {errors.subject && (
                            <span className="errorMessage">{errors.subject.message}</span>
                          )}
                        </div>
                      </div>
                      {/* Row 3 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="lastName"
                            {...register('LastName', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="שם משפחה"
                          />
                          {errors.message && <span className="errorMessage">הכנס שם משפחה</span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="numberOfSouls"
                            {...register('numberOfSouls', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="מספר נפשות"
                          />
                          {errors.message && <span className="errorMessage">הכנס מספר נפשות</span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="aboutUs"
                            {...register('aboutUs', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder=" קצת עלינו"
                          />
                          {errors.message && <span className="errorMessage">הכנס עלינו</span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="contact"
                            {...register('contact', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="איש קשר"
                          />
                          {errors.message && <span className="errorMessage">הכנס איש קשר</span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            type='number'
                            name="phone"
                            {...register('phone', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="מספר טלפון"
                          />
                          {errors.message && <span className="errorMessage">הכנס מספר טלפון</span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="location"
                            {...register('location', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="מיקום"
                          />
                          {errors.message && <span className="errorMessage">הכנס מיקום </span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="conditions"
                            {...register('conditions', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="תנאים"
                          />
                          {errors.message && <span className="errorMessage">הכנס תנאים </span>}
                        </div>
                      </div>
                      <button className="submit-btn" type="submit">
                       הכנס פרטים
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            ההודעה נשלחה,תודה רבה!
            <button className="new-message-btn" onClick={() => setSubmitted(false)}>
              הודעה חדשה
            </button>
          </div>
        );
      }
}

export default FormHouse