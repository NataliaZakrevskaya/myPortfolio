import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.footerTitle}>Natalia Zakrevskaya</h2>
                <div className={s.footerImagesContainer}>
                    <div className={s.footerImages}></div>
                    <div className={s.footerImages}></div>
                    <div className={s.footerImages}></div>
                    <div className={s.footerImages}></div>
                </div>
                <p className={s.copyright}>© 2022, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;