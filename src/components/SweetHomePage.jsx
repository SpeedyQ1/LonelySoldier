import React ,{useState} from 'react'
import './SweetHome.css'
import emailjs from 'emailjs-com';

export const SweetHomePage = ({ index }) => {
  const [sweetHomeArr, setsweetHomeArr] = useState(JSON.parse(localStorage.getItem("sweetHomeArr")));
 
  let imgUrl = sweetHomeArr[index].img;
  let phone = sweetHomeArr[index].phone;
  let contact = sweetHomeArr[index].contact;
  let discription = sweetHomeArr[index].discription;
  let  condition = sweetHomeArr[index].conditions;
  let  lastName= sweetHomeArr[index]. lastName;
  let name = sweetHomeArr[index].name;
  let id = sweetHomeArr[index].id;
  let numberOfSouls = sweetHomeArr[index].numberOfSouls;
  let aboutUs = sweetHomeArr[index].aboutUs;
  let location = sweetHomeArr[index].location;
  function handleClick(){
    alert(`תודה שבחרת ב${name} להיות שם בשבילך, הוא יצור קשר בקרוב`)
 }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70o4oqk', 'template', e.target, 'ZjMePZlpfng_2A2Jl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

  return (
    
      <div className="sweet-home-card-container">
        <div id='sweet-left-section'>
              <img className="image-container-sweet" src={imgUrl} alt=""  />
          <div className="description-container-sweet">
              <div className="description-header-container">    
                  <p  className="description-header">
                    משפחת {lastName}
                  </p>
              </div>
              <div className="description-content-container">
                  <div className="description-content">
                      <div id="soules">מספר נפשות בבית: {numberOfSouls}</div>
                      <div id="about">{aboutUs}</div>
                      <div id="address">כתובת:{location}</div>
                      <div id="contact">איש קשר: {name} {lastName},{phone}</div>
                      <div id="conditions">תנאים: {condition}</div>
                  </div>
              </div>
          </div>
          </div>

      <form className="email-form" onSubmit={sendEmail}>
      <input type="hidden" name="id" value={id} />
        <input type="hidden" name="name" value={name} />
        <button className="send" type="submit" onClick={handleClick}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <span>מעוניין</span>
            </button>
      </form>
    </div>
  );

   
  

}