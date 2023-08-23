import React ,{useEffect}from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight,faHouse,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';



export const Homepage = () => {
  const findMyCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };
useEffect(()=>{
  findMyCoordinates()
},[])
  
  return (
    <div className="container-home">
      <div className="image-container-home">
        <img className='container-home' src="https://www.newarab.com/sites/default/files/media/images/F433CDF2-DFED-4DAA-94AB-8D6FEADAC990.jpg" alt="Soldiers" />
        <h2 className='shtok'>Thank you for your service</h2>
      </div>
      <div className="website-description">
        <div className="website-description-container">
          <div className="website-description-image">
            <img src='https://sz-folien.de/wp-content/uploads/2020/11/art-nr.297-we-want-you.png' alt="Soldier" />
          </div>
          <div className="website-description-container-complete">
            <div className="website-description-pos-right">
              <p className="website-description-header">מה אנחנו מציעים?</p>
              <p className="website-description-content">
              ברוכים הבאים לפלטפורמת התמיכה בחיילים בודדים! אתר זה תוכנן במיוחד כדי לתת מענה לצרכים של חיילים הנקלעים למצבים מאתגרים ובודדים במהלך שירותם הצבאי, ללא נוכחות של קשרי משפחה. אנו מבינים את הנסיבות והמאבקים הייחודיים איתם מתמודדים חיילים בודדים, ומשימתנו היא לספק להם את התמיכה והסיוע המגיעים להם.  </p>
            </div>
          </div>
        </div>
      </div>
      <div className="activity-wrapper-container">
        <div className="activity-large-container">
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faHouse} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">מצא בית חם שיארח אותך בסופ"ש הקרוב</p>
              <p className="activity-description"> חלל ייעודי זה נועד לתת מענה לצרכים והאתגרים הייחודיים שלכם במהלך השירות הצבאי שלכם, במיוחד אם אתם מוצאים את עצמכם ללא הנוחות של קשרים משפחתיים. אנו מבינים את המורכבות שעומדת בפניכם ונמצאים כאן כדי לספק את הסיוע והאחווה המגיעים לכם</p>
              <div className="sign-button">
              <Link to='/Soldier/SweetHome' ><button id="butn"> בית חם</button></Link>
              </div>
            </div>
          </div>
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ color: 'white' }} />

              </div>
              <p className="activity-text">תמצא את המנטור שלך לחיים</p>
              <p className="activity-description">לכל אחד יש דמות שהוא מעריץ. תמצאו את הדמות שלכםת תלמדו ממנה וקחו ממנה כמה שתוכלו</p>
              <div className="sign-button">
              <Link to='/Soldier/WalkingWith'> <button id="butn"> ללכת איתך</button></Link>
              </div>
            </div>
          </div>
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
              <FontAwesomeIcon icon={faPhoneVolume} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">תמצא אוזן קשבת בשבילך</p>
              <p className="activity-description">כל אחד צריך לפרוק אצל מישהות מישהו שיקשיב לו בלי לשפוט ורק יחבקץ יכול להיות שהמישהו הזה נמצא בצד השני של הקו!</p>
              <div className="sign-button">
              <Link to='/Soldier/WarmShoulder'> <button id="butn"> כתף חמה</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
