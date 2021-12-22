import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';
const CardEditForm = ({card, updateCard, deleteCard}) => {
    const {
        id,
        name,
        stack,
        title,
        company,
        message,
        theme,
        githubURL,
        fileName,
        fileURL
    } = card;

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const githubUrlRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();
    const stackRef = useRef();

    const onSubmit = () =>{
        deleteCard(card);
    }
    
    const onChange = (event) =>{
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    return(
        <form ref={formRef} className={styles.form}>
            <ImageFileInput 
                className={styles.fileInput}/>
            <input 
                ref={nameRef} 
                className={styles.input} 
                type="text" 
                name="name" 
                value={name}
                onChange={onChange} 
                />
            <input 
                ref={companyRef}
                className={styles.input} 
                type="text" 
                name="company" 
                value={company} 
                onChange={onChange} 
                />
            <select 
                ref={themeRef} 
                className={styles.select} 
                name="theme" 
                value={theme}
                onChange={onChange} 
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="pink">Pink</option>
            </select>
            <input 
                ref={titleRef} 
                className={styles.input} 
                type="text" 
                name="title"
                value={title} 
                onChange={onChange} 
                />
            <input 
                ref={stackRef} 
                className={styles.input} 
                type="text" 
                name="stack"
                value={stack} 
                onChange={onChange} 
                />
            <input 
                ref={githubUrlRef} 
                className={styles.input} 
                type="text" 
                name="githubURL"
                value={githubURL} 
                onChange={onChange} 
                />
            <textarea 
                ref={messageRef} 
                className={styles.textarea} 
                name="message" 
                value={message}
                onChange={onChange} 
                />
            <Button 
                className={styles.button} 
                name="Delete" 
                onClick={onSubmit} />
        </form>
    )
};

export default CardEditForm;