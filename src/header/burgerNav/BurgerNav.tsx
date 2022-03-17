import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import {Link} from "react-scroll";

export const BurgerNav = () => {

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
                    offset={40}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={40}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contact</Link>
            </div>
            <div onClick={onClickHandler} className={s.burgerButton}></div>
        </div>
    );
};