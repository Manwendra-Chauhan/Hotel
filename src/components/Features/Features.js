import styles from "./Features.module.css";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';

const Features=(props)=>{
    return(
        <div className={styles.features}>
                <div className={styles.type}>
                    <BusinessOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.capacity}</span>
                </div>
                <div className={styles.type}>
                    <BedOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.bed}</span>
                </div> 
                <div className={styles.type}>
                    <BathtubOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.bath}</span>
                </div>
                <div className={styles.type}>
                    <ZoomOutMapOutlinedIcon className={styles.icon}/>
                    <span className={styles.icon_text}>{props.Size}</span>
                </div>
        </div>
    )
}

export default Features;