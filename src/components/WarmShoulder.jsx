
import React, {useState,useEffect} from 'react'

import './WarmShoulder.css'
import { WarmShoulderPage } from './WarmShoulderPage';

export const WarmShoulder = () => {
  const [warmShoulderArr, setwarmShoulderArr] = useState([]);
  useEffect(() => {
      setwarmShoulderArr(JSON.parse(localStorage.getItem("warmShoulderArr")))
  }, []);
return (
   <div className='walkingpage'>
 { warmShoulderArr.map((value, index) => (
      <WarmShoulderPage key={index} index={index} />
    ))}
    </div>
)

}
