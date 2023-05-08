import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error,Loader,SongCard } from '../components';

const AroundYou = () => {
      
    const [country,setCountry] = useState('')
    const [loading,setLoading] = useState(true)
    const {activeSong,isPlaying} = useSelector((state)=>state.player)

    console.log(country)
     
    useEffect(()=>{
         axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=0ead0b6bda864d1e9b19415bb14e96eb`)
          .then((res)=>setCountry(res?.data.country.name))
          .catch((err)=>console.log(err))
          .finally(()=>setLoading(false))
    },[country])

     return(
         <div> 
            
         </div>
     )
 }
export default AroundYou;
