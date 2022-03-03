import React from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/Title/Title";


const Contact = () => {


    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact'}/>
                <form className={s.contactsForm}>
                    <div className={s.nameEmailContainer}>
                        <input className={s.contactsInput} type={"text"} value={"Name *"}/>
                        <input className={s.contactsInput} type={"text"} value={"E-mail *"}/>
                    </div>
                    <input className={s.contactsInput} type={"text"} value={"Phone"}/>
                    <textarea value={"Message"}></textarea>
                    <button>SEND message</button>
                </form>

            </div>
        </div>
    )
}

export default Contact;