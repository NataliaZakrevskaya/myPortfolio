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
                    {state
                    ? <div className={s.activeInputContainer}>
                            <input type={"text"}/>
                            <span>Name</span>
                        </div>
                    : <div className={s.inputContainer}>
                            <input onClick={onClickHandler} type={"text"}/>
                            <span>Name</span>
                        </div>
                    }
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