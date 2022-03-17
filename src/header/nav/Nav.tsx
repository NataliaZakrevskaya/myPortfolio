import React from 'react';
import s from "./Nav.module.scss";
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={s.nav}>
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
    );
}

export default Nav;