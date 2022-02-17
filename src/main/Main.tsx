import React from 'react';
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <h3>Front-end developer</h3>
                    <p>Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;