import React ,{useState,useEffect} from 'react'
import './WalkingWith.css'
import { WalkingWithPage } from './WalkingWithPage';


export const WalkingWith = () => {
  const [walkingArr, setwalkingArr] = useState([]);
  useEffect(() => {
      setwalkingArr(JSON.parse(localStorage.getItem("walkingArr")))
  }, []);
return (
  <div className='walkingpage'>
  {walkingArr.map((value, index) => (
      <WalkingWithPage key={index} index={index} />
    ))}</div>
)

}