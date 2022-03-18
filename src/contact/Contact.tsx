import React, {useState} from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/Title/Title";
// @ts-ignore
import Tada from 'react-reveal/Tada';


const Contact = () => {

    const [name, setName] = useState<string>('Name *')
    const [email, setEmail] = useState<string>('E-mail *')
    const [phone, setPhone] = useState<string>('Phone')
    const [message, setMessage] = useState<string>('Message')

    return (
        <div id={'contact'} className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact'}/>
                <Tada>
                    <form className={s.contactsForm}>
                        <div className={s.nameEmailContainer}>
                            <input onChange={(e)=>{setName(e.currentTarget.value)}} className={s.contactsInput} type={"text"} value={name}/>
                            <input onChange={(e)=>{setEmail(e.currentTarget.value)}} className={s.contactsInput} type={"text"} value={email}/>
                        </div>
                        <input onChange={(e)=>{setPhone(e.currentTarget.value)}} className={s.contactsInput} type={"text"} value={phone}/>
                        <textarea onChange={(e)=>{setMessage(e.currentTarget.value)}} value={message}></textarea>
                        <button>SEND message</button>
                    </form>
                </Tada>
            </div>
        </div>
    )
}

export default Contact;