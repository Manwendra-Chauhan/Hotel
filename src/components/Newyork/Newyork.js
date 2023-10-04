/* eslint-disable react/jsx-key */

import { useState } from 'react';
import styles from "./Newyork.module.css"
import Card from '@/components/Card/Card';
import {data, data2} from "../data";
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';

const Newyork=()=>{

    const [showMore, setShowMore]=useState(false);

    const showMoreHandler= ()=>{
      setShowMore(!showMore)
    }
    
    return(
        <div>
            {data.map((content)=>{   
            return(
              <div className={styles.body}>
                  {content.map((item)=>{
                      return <Card img={item.image} address={item.address} location={item.location} capacity={item.capacity} bed={item.bed} bath={item.bath} Size={item.Size} price={item.price} type={item.type} key={item.key}/>
                  })}
              </div>
            ) 
          
          })}
          {showMore &&  data2.map((content)=>{   
              return(
                <div className={styles.body}>
                    {content.map((item)=>{
                        return <Card img={item.image} address={item.address} location={item.location} capacity={item.capacity} bed={item.bed} bath={item.bath} Size={item.Size} price={item.price} type={item.type} key={item.key}/>
                    })}
                </div>
              ) 
            
            })}
            <button className={styles.show} onClick={showMoreHandler}><HourglassTopOutlinedIcon className={styles.icon}/>Show More</button>
        </div>
        
    )
}

export default Newyork;