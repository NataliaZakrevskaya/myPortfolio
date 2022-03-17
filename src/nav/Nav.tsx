import React from 'react';
import s from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={"https://social-network.samuraijs.com/"}>Main</a>
            <a href={"https://social-network.samuraijs.com/"}>Skills</a>
            <a href={"https://social-network.samuraijs.com/"}>Projects</a>
            <a href={"https://social-network.samuraijs.com/"}>Contact</a>
        </div>
    );
}

export default Nav;