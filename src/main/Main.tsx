import React from 'react';
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h3>I'm Natalia Zakrevskaya</h3>
                    <p>Front-end developer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;