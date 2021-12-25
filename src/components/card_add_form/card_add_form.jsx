import React, { useRef,useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({FileInput, handleSubmit}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const githubUrlRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();
    const stackRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null});

    const onFileChange = file =>{
        setFile({
            fileName: file.name,
            fileURL: file.url,
        })
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || 'name',
            company: companyRef.current.value  || 'company',
            title: titleRef.current.value  || 'position',
            githubURL: githubUrlRef.current.value  || '',
            message: messageRef.current.value  || 'Please enter a message.',
            theme: themeRef.current.value,
            stack: stackRef.current.value || 'stack',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        }
        
        formRef.current.reset();
        setFile({fileName: null, fileURL: null});
        handleSubmit(card);
    }
    
    return(
        <form ref={formRef}className={styles.form}>
            <FileInput 
            name={file.fileName}
            className={styles.fileInput}
            onFileChange={onFileChange}
            />
            <input ref={nameRef} placeholder='name' className={styles.input} type="text" name='name' />
            <input ref={companyRef} placeholder='company' className={styles.input} type="text" name='company'/>
            <select ref={themeRef} className={styles.select} name="theme" >
                <option  value="blue">Blue</option>
                <option value="dark">Dark</option>
                <option value="pink">Pink</option>
            </select>
            <input ref={titleRef} placeholder='position' className={styles.input} type="text" name='title'  />
            <input ref={stackRef} placeholder='stack' className={styles.input} type="text" name='stack'/>
            <input ref={githubUrlRef} placeholder='githubURL' className={styles.input} type="text" name='githubURL'  />
            <textarea ref={messageRef} placeholder='message' className={styles.textarea} name="message"/>
            <Button className={styles.button} name="Add" onClick={onSubmit} />
        </form>
    )
};

export default CardAddForm;