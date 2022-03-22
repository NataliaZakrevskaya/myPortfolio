import React from 'react';
import s from './Contact.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/Title/Title";
import axios from 'axios';
// @ts-ignore
import Tada from 'react-reveal/Tada';
import {useFormik} from "formik";


const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        onSubmit: value => {
            console.log({name: value.name,
                email: value.email,
                phone: value.phone,
                message: value.message,})
            formik.resetForm()
            axios.post("https://smtp-nodejs-server2022.herokuapp.com/sendMessage", {
                name: value.name,
                email: value.email,
                phone: value.phone,
                message: value.message,
            })
                .then(() => {
                    alert('Your message has been sent')
                })
        }
    })

    return (
        <div id={'contact'} className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact'}/>
                <Tada>
                    <form className={s.contactsForm} onSubmit={formik.handleSubmit}>
                        <div className={s.nameEmailContainer}>
                            <input
                                className={s.contactsInput}
                                type={"text"}
                                placeholder={"Name"}
                                {...formik.getFieldProps('name')}
                            />
                            <input
                                className={s.contactsInput}
                                type={"text"}
                                placeholder={"Email"}
                                {...formik.getFieldProps('email')}
                            />
                        </div>
                        <input
                            className={s.contactsInput}
                            type={"text"}
                            placeholder={"Phone"}
                            {...formik.getFieldProps('phone')}
                        />
                        <textarea
                            placeholder={"Your message"}
                            {...formik.getFieldProps('message')}
                        ></textarea>
                        <button type={'submit'}>SEND message</button>
                    </form>
                </Tada>
            </div>
        </div>
    )
}

export default Contact;