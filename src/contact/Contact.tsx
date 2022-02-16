import React from 'react';
import s from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


const Contact = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact'}/>
                <form className={s.contactsForm}>
                    <input className={s.contactsInput} type={"text"} value={"Name"}/>
                    <input className={s.contactsInput} type={"text"} value={"E-mail"}/>
                    <textarea className={s.contactsTextarea} value={"Your message"}></textarea>
                </form>
                {/*</div>*/}
                <button>SEND</button>
            </div>
        </div>
    )
}

export default Contact;