import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
const CardEditForm = ({card}) => {
    const {
        id,
        name,
        email,
        title,
        company,
        message,
        fileName,
        theme,
        fileURL
    } = card;

    const onSubmit = () =>{

    }
    
    return(
        <form className={styles.form}>
            <ImageFileInput className={styles.fileInput}/>
            <input className={styles.input} type="text" name={name} value={name} />
            <input className={styles.input} type="text" name={company} value={company} />
            <select className={styles.select} name="theme" value={theme} >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="pink">Pink</option>
            </select>
            <input className={styles.input} type="text" name={title} value={title} />
            <input className={styles.input} type="text" name={email} value={email} />
            <textarea className={styles.textarea} name="message" value={message}/>
            <Button className={styles.button} name="Delete" onClick={onSubmit} />
        </form>
    )
};

export default CardEditForm;