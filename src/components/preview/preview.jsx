import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';
const Preview = ({cards}) =>{
    return(
        <section className={styles.preview}>
            <h1 className={styles.title}>card preview</h1>
            <ul className={styles.cards}>
                {Object.keys(cards).map(key =>
                    <Card key={key} card={cards[key]}/> 
                )}
            </ul>
        </section>
    )
};

export default Preview;