import React from 'react'
// import Test from '../../common/Test';
import styles from './index.module.css'


const Home = () => {

    return (
        <header className={styles.header}>
            <video src="/videos/video-2.mp4" autoPlay loop muted id={styles.myVideo} />
            <div className={styles.content}>
                <h1> Gold Label</h1>
                <p>Book your next event with us!</p>
            </div>

        </header>
    )
}

export default Home

