import React, { useRef, useState, useCallback } from 'react';
import './FormHouse.css';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

function MyDropzone({ setTheUrl }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result;
      setTheUrl(url); // Set theUrl state with the uploaded image URL
    };

    reader.readAsDataURL(file);
  }, [setTheUrl]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <button>
        <div id='firstDiv' {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop a file here, or click to select a file</p>
        </div>
      </button>
    </div>
  );
}

function FormWalking({ setNewFormClicked }) {
  const [submitted, setSubmitted] = useState(false);
  const [walkingArr, setWalkingArr] = useState(JSON.parse(localStorage.getItem('walkingArr')));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();
  const [imageURL, setImageURL] = useState(null);

  const handleFormSubmit = (data) => {
    if (!imageURL) {
      alert('Please upload an image');
      return;
    }

    const formData = { ...data, img: imageURL }; // Include the imageURL in the form data
    onSubmit(formData);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    let temp = [...walkingArr, data];
    localStorage.setItem('walkingArr', JSON.stringify(temp));
    setNewFormClicked(4);
    alert('נרשמת בהצלחה');
  };

  if (!submitted) {
    return (
      <div className='Contactus'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='Contactus'>
                <form id='contact-form' onSubmit={handleSubmit(handleFormSubmit)} noValidate ref={form}>
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { value: true, message: 'אנא הכנס שם פרטי' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less',
                          },
                        })}
                        className='form-control formInput'
                        placeholder='שם פרטי'
                      />
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='id'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className='form-control formInput'
                        placeholder='כתובת אי-מייל'
                      />
                      {errors.email && (
                        <span className='errorMessage'>אנא הכנס כתובת אי-מייל</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <MyDropzone setTheUrl={setImageURL} />
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='lastName'
                        {...register('LastName', {
                          required: true,
                        })}
                        className='form-control formInput'
                        placeholder='שם משפחה'
                      />
                      {errors.message && <span className='errorMessage'>אנא הכנס שם משפחה</span>}
                    </div>
                  </div>
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='contact'
                        {...register('contact', {
                          required: true,
                        })}
                        className='form-control formInput'
                        placeholder='איש קשר'
                      />
                      {errors.message && <span className='errorMessage'>אנא הכנס איש קשר </span>}
                    </div>
                  </div>
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='phone'
                        {...register('phone', {
                          required: true,
                        })}
                        className='form-control formInput'
                        placeholder='מספר טלפון נייד'
                      />
                      {errors.message && <span className='errorMessage'>אנא הכנס מספר טלפון נייד</span>}
                    </div>
                  </div>
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='discription'
                        {...register('discription', {
                          required: true,
                        })}
                        className='form-control formInput'
                        placeholder='תיאור'
                      />
                      {errors.message && <span className='errorMessage'>אנא הכנס תיאור </span>}
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
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
        המידע נשלח, תודה
        <button className='new-message-btn' onClick={() => setSubmitted(false)}>
          הרשמה חדשה
        </button>
      </div>
    );
  }
}

export default FormWalking;
