import React, {useState} from 'react';
import s from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


const Contact = () => {

    const [state, setState] = useState<boolean>(false)

    const onClickHandler = () => {
        setState(!state)
    }

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
                    <textarea className={s.contactsTextarea} value={"Message"}></textarea>
                </form>
                {/*</div>*/}
                <button>SEND message</button>
            </div>
        </div>
    )
}

export default Contact;