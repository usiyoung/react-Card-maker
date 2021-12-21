import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({handleSubmit}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const githubUrlRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();
    const stackRef = useRef();

    const onSubmit = (event) =>{
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value  || '',
            title: titleRef.current.value  || '',
            githubURL: githubUrlRef.current.value  || '',
            message: messageRef.current.value  || '',
            theme: themeRef.current.value,
            stack: stackRef.current.value || '',
        }
        formRef.current.reset();
        handleSubmit(card);
    }
    
    return(
        <form ref={formRef}className={styles.form}>
            <ImageFileInput className={styles.fileInput}/>
            <input ref={nameRef} placeholder='name' className={styles.input} type="text" name='name' />
            <input ref={companyRef} placeholder='company' className={styles.input} type="text" name='company'/>
            <select ref={themeRef} className={styles.select} name="theme" >
                <option value="blue">Blue</option>
                <option value="dark">Dark</option>
                <option value="pink">Pink</option>
            </select>
            <input ref={titleRef} placeholder='title' className={styles.input} type="text" name='title'  />
            <input ref={stackRef} placeholder='stack' className={styles.input} type="text" name='stack'/>
            <input ref={githubUrlRef} placeholder='githubURL' className={styles.input} type="text" name='githubURL'  />
            <textarea ref={messageRef} placeholder='message' className={styles.textarea} name="message"/>
            <Button className={styles.button} name="Add" onClick={onSubmit} />
        </form>
    )
};

export default CardAddForm;