import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import {Link} from "react-scroll";
import menuImg from "./../../common/assets/burgerNav/menu.png"
import closeImg from "./../../common/assets/burgerNav/close.png"

export const BurgerNav = () => {

    const menu = {
        backgroundImage: `url(${menuImg})`
    }
    const close = {
        backgroundImage: `url(${closeImg})`
    }

    const [editMode, setEditMode] = useState<boolean>(false)

    const onClickHandler = () => {
        setEditMode(!editMode)
    }
    console.log(editMode)


    return (
        <div className={s.burgerNav}>
            <div className={editMode ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >Contact</Link>
            </div>
            <div onClick={onClickHandler} style={editMode? close : menu} className={s.burgerButton}></div>
        </div>
    );
};