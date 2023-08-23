import React, { useState } from 'react'

import FormHouse from './FormHouse'
import FormWalking from './FormWalking'
import FormShoulder from './FormShoulder'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight, faHouse, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export const Volunteerpage = () => {

  const [newFormClicked, setNewFormClicked] = useState(0)

  function print() {
    if (newFormClicked == 1) {
      return <FormWalking setNewFormClicked={setNewFormClicked} />
    }
    if (newFormClicked == 2) {
      return <FormHouse setNewFormClicked={setNewFormClicked} />
    }
    if (newFormClicked == 3) {
      return <FormShoulder setNewFormClicked={setNewFormClicked} />
    }
    if (newFormClicked == 4) {
      return null
    }
  }
  function cancleBtn() {
    if (newFormClicked == 1 || newFormClicked == 2 || newFormClicked == 3) {
      return (
        <button className="cssbuttons-io-button cancelbutton" onClick={() => setNewFormClicked(4)}>
          cancel creation
        </button>
      )
    }
  }



  return (
    <div className="volunteer-page-container">
      <div className="volunteer-image-container">
        <img className='volunteer-image' src="https://img.picturequotes.com/1/661/no-one-has-ever-become-poor-from-giving-quote-1.jpg" alt="Soldiers" />
        <div className="image-text-overlay">

        </div>
      </div>
      <div className="website-description">
        <div className="website-description-container">
          <div className="website-description-image">
            <img src='../soldierboy.png' alt="Soldier" />
          </div>
          <div className="website-description-container-complete">
            <div className="website-description-pos-right">
              <p className="website-description-header">מה אנחנו מציעים?</p>
              <p className="website-description-content">
                ברוך הבא לאתר התנדבויות למען חיילים בודדים! האתר הזה מיועד לאנשים רוצים להתנדב ולתמוך בחיילים שנמצאים במצבים בודדים וללא קשרים משפחתיים במהלך שירותם הצבאי.<br />
                התנדבות באמצעותנו מספקת את ההזדמנות לתת מעצמך ולתמוך בחיילים בדרך שמתאימה לך.<br />
                בנוסף, תוכל לקבל מידע מפורט על הפרויקטים הקיימים והצרכים הנוכחיים של החיילים, כדי שתוכל לבחור את האפשרות המתאימה לך ולהתנדב בצורה שתתחשב בכל המערכות והתנאים שלך.<br />
                אנו מזמינים אותך להצטרף אלינו ולהיות חלק ממערך התמיכה החשוב הזה.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="activity-wrapper-container">
       
          <div className="activity-container">

            <div className="activity-icon">
              <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ color: 'white' }} />
            </div>
            <p className="activity-text">לך צד לצד עם לוחמים כמנטור</p>
            <p className="activity-description">היה מנטור של חיילים, תן להם קצת מניסיון החיים שלך, תהיה הורה ואח למי שצריך</p>
            <div className="sign-button">

              <button className="cssbuttons-io-button" onClick={() => setNewFormClicked(1)}>
                צועדים איתך
              </button>

            </div>

          </div>
          <div className="activity-container">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faHouse} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">ספק בית לחייל בודד ותעשה להם את היום</p>
              <p className="activity-description">ספקו לחייל בודד את ביתכם החם והתנדבו היום בכדי לעזור לקהילה ולחמם לעוד חייל את הלב. אנחנו רק נקשר אתכם אל החייל שלכם וקבלו אותו באהבה</p>
              <div className="sign-button">

                <button className="cssbuttons-io-button" onClick={() => setNewFormClicked(2)}>
                  בית חם
                </button>
              </div>
          </div>
          <div className="activity-container">
            <div className="info-activity-container">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: 'white' }} />
              </div>
              <p className="activity-text">אתה החבר הטלפוני שהם צריכים</p>
              <p className="activity-description">תהיה קשוב, סבלני, אל תשפוט, תתן מעצמך עוד קצת למען האחר</p>
              <div className="sign-button">

                <button className="cssbuttons-io-button" onClick={() => setNewFormClicked(3)}>
                  כתף חמה
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id='form-printed'>{print()}</div>
        {cancleBtn()}
     
    </div>
  );
};
