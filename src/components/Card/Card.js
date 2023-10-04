import Image from "next/image";
import styles from "./Card.module.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Card= (props)=>{
    return(
        <div className={styles.card}>
            <div className={styles.top}>
                <button className={styles.type}>{props.type}</button>
                <FavoriteBorderOutlinedIcon className={styles.like}/>
            </div>
            <Image src={props.img} alt="" className={styles.card_image}/>
            <p className={styles.location}><LocationOnOutlinedIcon className={styles.location_icon}/> {props.location}</p>
            <h4 className={styles.card_name}>{props.address}</h4>
            <Features capacity={props.capacity} bed={props.bed} bath={props.bath} Size={props.Size}/>
            <Pricing price={props.price}/>
        </div>
    )
}


export default Card;