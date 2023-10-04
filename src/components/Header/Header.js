import styles from "./Header.module.css";

const Header= ()=>{
    return(
        <div className={styles.header}>
            <h1 className={styles.title}>Featured Listed Property</h1>
            <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus nibh in elit lacinia, ac cursus nisl placerat. Donec odio ipsum, sodales nec ante ut, ullamcorper sollicitudin sem.  </p>
        </div>
    )
}


export default Header;