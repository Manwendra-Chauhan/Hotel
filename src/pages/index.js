/* eslint-disable react/jsx-key */
import Header from '@/components/Header/Header'
import styles from "../styles/Home.module.css";
import Newyork from '@/components/Newyork/Newyork';
import { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Mumbai from '@/components/Mumbai/Mumbai';
import Paris from '@/components/Paris/Paris';
import London from '@/components/London/London';


export default function Home() {

  const [city1,setCity1 ]=useState(true);
    const [city2,setCity2 ]=useState(false);
    const [city3,setCity3 ]=useState(false);
    const [city4,setCity4 ]=useState(false);

    const clickHandler=()=>{
        setCity1(true);
        setCity2(false);
        setCity3(false);
        setCity4(false);
    }

    const clickHandler2=()=>{
        setCity1(false);
        setCity2(true);
        setCity3(false);
        setCity4(false);
    }

    const clickHandler3=()=>{
        setCity1(false);
        setCity2(false);
        setCity3(true);
        setCity4(false);
    }

    const clickHandler4=()=>{
        setCity1(false);
        setCity2(false);
        setCity3(false);
        setCity4(true);
    }



  return (
    <div>
      <Header/>
      <div className={styles.navbar}>
            <span className={city1? styles.active:styles.nav} onClick={clickHandler}>New York</span>
            <span className={city2? styles.active:styles.nav} onClick={clickHandler2}>Mumbai</span>
            <span className={city3? styles.active:styles.nav} onClick={clickHandler3}>Paris</span>
            <span className={city4? styles.active:styles.nav} onClick={clickHandler4}>London</span>
            <span className={styles.view_all}>View All <ArrowForwardIcon/></span>
        </div>
      {city1 && <Newyork/>}
      {city2 && <Mumbai/>}
      {city3 && <Paris/>} 
      {city4 && <London/>}
    </div>
  )
}
