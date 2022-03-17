import React from 'react';
import styleContainer from "../common/styles/Container.module.scss";
import s from './Footer.module.scss';
// @ts-ignore
import Slide from 'react-reveal/Slide';
import ReactTypingEffect from "react-typing-effect";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <Slide bottom>
                <div className={`${styleContainer.container} ${s.footerContainer}`}>
                    <ReactTypingEffect
                        text={'Natalia Zakrevskaya'}
                    />
                    {/*<h3 className={s.title}>Natalia Zakrevskaya</h3>*/}
                    <div className={s.footerLinksContainer}>
                        <a href={'https://www.linkedin.com/in/natasha-zakrevskaya/'} className={s.footerImages}>
                            <img src={'https://www.svgrepo.com/show/332442/linkedin.svg'}/>
                        </a>
                        <a href={'https://github.com/NataliaZakrevskaya/'} className={s.footerImages}>
                            <img src={'https://www.svgrepo.com/show/332084/github.svg'}/>
                        </a>
                        <a href={'https://www.codewars.com/users/nataliazakrevskaya'} className={s.footerImages}>
                            <img src={'https://www.shareicon.net/data/2016/11/01/849405_codewars_512x512.png'}/>
                        </a>
                        <a href={'https://t.me/nataliazakrevskaya'} className={s.footerImages}>
                            <img
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Telegram_font_awesome.svg/1200px-Telegram_font_awesome.svg.png'}/>
                        </a>
                    </div>
                    <p className={s.copyright}>© 2022, All Rights Reserved.</p>
                </div>
            </Slide>
        </div>
    )
}

export default Footer;