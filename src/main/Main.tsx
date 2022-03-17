import React from 'react';
import s from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.scss"
import sign from "../common/assets/sign.jpg"
import mainPhoto from "../common/assets/mainPhoto.jpg"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>

                    <div className={s.photoContainer}>
                        <div className={s.photoBlock}>
                            <img src={mainPhoto}/>
                        </div>
                        <div className={s.dotsLayer}></div>
                    </div>

                <div className={s.greeting}>
                    <h3>Front-end developer</h3>
                    <p>Junior Front-End developer with experience and good knowledge in creating SPA using React, Redux,
                        Typescript, JS, HTML, CSS.</p>
                    <img src={sign}/>
                </div>
            </div>
        </div>
    );
}

export default Main;