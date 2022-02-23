import React from 'react';
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.photo}></div>
                <div className={s.greeting}>
                    <h3>Front-end developer</h3>
                    <p>Junior Front-End developer with experience and good knowledge in creating SPA using React, Redux,
                        Typescript, JS, HTML, CSS.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;