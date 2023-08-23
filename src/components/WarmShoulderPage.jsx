import React  ,{useState}  from 'react'
import './WarmShoulder.css'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

export const WarmShoulderPage = ({index}) => {
  const [warmShoulderArr, setwarmShoulderArr] = useState(JSON.parse(localStorage.getItem("warmShoulderArr")));
 
  let imgUrl = warmShoulderArr[index].img;
  let phone = warmShoulderArr[index].phone;
  let contact = warmShoulderArr[index].contact;
  let discription = warmShoulderArr[index].discription;
  let  condition = warmShoulderArr[index].condition;
  let  lastName= warmShoulderArr[index]. lastName;
  let name = warmShoulderArr[index].name;
  let email = warmShoulderArr[index].id;

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
   <div id="warm-container">
     <div id="waking-card">
     <div id="image-container">
       <img id="the-img" src={imgUrl} />
     </div>

         <div id="card-discription">
           <h1 id="name-title">{name} {lastName}</h1>
           <div>
           <div id="vol-description">
             <h3>קצת עלי:</h3>
             <p>{discription}</p>
           </div>
           <div>
             <h3>מוזמן לפנות אלי בכל שאלה בטלפון: {phone}</h3>
           </div>
           </div>
           <form className="email-form" onSubmit={sendEmail}>
      <input type="hidden" name="id" value={email} />
        <input type="hidden" name="name" value={name} />
        <button className="send" type="submit" onClick={handleClick}>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
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
         </div>
   </div>
 );
};