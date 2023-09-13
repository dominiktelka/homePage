import styles from './LoadingScreen.module.css'
import Spinner from "./Spinner.jsx";


export default function LoadingScreen({isVisible}) {

    return (
        <div className={styles.loadingScreen} style={{opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'all' : 'none'}}>
            <Spinner />
        </div>
    )
}
