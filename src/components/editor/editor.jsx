import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({cards,addCard}) => {

    return(
        <section className={styles.editor}>
            <h1 className={styles.title}>Editor</h1>
            <ul className={styles.cards}>
                {cards.map(card =>
                    <CardEditForm card={card} key={card.id}/> 
                )}
                <CardAddForm handleSubmit={addCard}/>
            </ul>
        </section>
    )
};

export default Editor;