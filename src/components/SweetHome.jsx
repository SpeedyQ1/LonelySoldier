import React,{useState,useEffect} from 'react'
import './SweetHome.css'
import { SweetHomePage } from './SweetHomePage';

export const SweetHome = () => {
    const [sweetHomeArr, setsweetHomeArr] = useState([]);
    useEffect(() => {
        setsweetHomeArr(JSON.parse(localStorage.getItem("sweetHomeArr")))
    }, []);
  return (
    <div className='pagecontainer'>
    {sweetHomeArr.map((value, index) => (
        <SweetHomePage key={index} index={index} />
        
    ))}
     </div>  
  )
 
}
