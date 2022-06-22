import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <div className="container">
                <div className="error">
                    <p className="errorMessage">Eror <span>404</span></p>
                </div>
                <h1 className="title">Whooops!</h1>
                <p className="subtitle">It seems like we couldn't find the page you were looking for.</p>
                <button className="primary-button back-button">Go bach</button>
            </div>
        </div>
    );
}

export default NotFound;