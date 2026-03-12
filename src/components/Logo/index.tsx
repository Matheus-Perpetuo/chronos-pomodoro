import { RouterLink } from '../RouterLink'
import styles from'./styles.module.css'


export function Logo() {
    return <div className={styles.logo}>
        <RouterLink className= {styles.logoLink}  href="/">
            <img src="/logo-pokebola.png" alt="Pokédoro" />
            <span>Pokédoro</span>
        </RouterLink>
    </div>
}