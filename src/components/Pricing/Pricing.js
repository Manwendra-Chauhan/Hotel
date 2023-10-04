import styles from "./Pricing.module.css";
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Pricing= (props)=>{
    return(
        <div className={styles.pricing}>
            <div>
                <span className={styles.price}>{props.price}</span>
                <span>/month</span>
            </div>
            <button className={styles.rent}>Read More</button>
        </div>
    )
}


export default Pricing;