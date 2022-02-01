import React from 'react';
import s from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";


const Contact = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contact</h2>
                {/*<div className={s.contactsFormContainer}>*/}
                    <form className={s.contactsForm}>
                        <input className={s.contactsInput} type={"text"} value={"Name"}/>
                        <input className={s.contactsInput} type={"text"} value={"E-mail"}/>
                        <textarea className={s.contactsTextarea } value={"Your message"}></textarea>
                    </form>
                {/*</div>*/}
                <button>SEND</button>
            </div>
        </div>
    )
}

export default Contact;