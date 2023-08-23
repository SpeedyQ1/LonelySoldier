import React, { useRef,useState } from 'react'
import './FormHouse.css'
import { useForm } from 'react-hook-form';


function FormShoulder({setNewFormClicked}) {
    const [submitted, setSubmitted] = useState(false);
    const [warmShoulderArr, setWarmShoulderArr] = useState(JSON.parse(localStorage.getItem("warmShoulderArr")));
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
      discription,
      contact,
      phone,
      
      } = data;
  
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
        let temp = [...warmShoulderArr, data];
         localStorage.setItem('warmShoulderArr', JSON.stringify(temp));
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
                              required: { value: true, message: 'אנא הכנס שם פרטי' },
                              maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                              }
                            })}
                            className="form-control formInput"
                            placeholder="שם פרטי"
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
                            placeholder="כתובת אי-מייל"
                          />
                          {errors.email && (
                            <span className="errorMessage">בבקה הכנס כתובת אי-מייל תקינה</span>
                          )}
                        </div>
                      </div>
                      {/* Row 2 of form */}
                      <div className="row formRow">
                        <div className="col">
                          <input
                            type="text"
                            name="img"
                            {...register('img', {
                              required: { value: true, message: 'אנא בחר תמונה' },
                              maxLength: {
                                value: 75,
                                message: 'add img'
                              }
                            })}
                            className="form-control formInput"
                            placeholder="תמונה"
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
                          {errors.message && <span className="errorMessage">אנא הכנס שם משפחה</span>}
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
                          {errors.message && <span className="errorMessage">אנא הכנס פרטי איש קשר </span>}
                        </div>
                      </div>
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="phone"
                            {...register('phone', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="מספר טלפון"
                          />
                          {errors.message && <span className="errorMessage">אנא הכנס מספר טלפון נייד</span>}
                        </div>
                      </div>
                     
                      <div className="row formRow">
                        <div className="col">
                          <textarea
                            rows={3}
                            name="discription"
                            {...register('discription', {
                              required: true
                            })}
                            className="form-control formInput"
                            placeholder="תיאור"
                          />
                          {errors.message && <span className="errorMessage">אנא הכנס תיאור</span>}
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
            ההודעה נשלחה, תןדה לך 
            <button className="new-message-btn" onClick={() => setSubmitted(false)}>
              New message
            </button>
          </div>
        );
      }
}

export default FormShoulder