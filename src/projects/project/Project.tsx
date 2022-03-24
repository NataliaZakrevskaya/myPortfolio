import React, {CSSProperties} from 'react';
import s from "./Project.module.scss";
//@ts-ignore
import Pulse from 'react-reveal/Pulse';

type ProjectPropsType = {
    title: string
    href: string
    description: string
    style: CSSProperties | undefined
}

const Poject = ({title, href, description, style}: ProjectPropsType) => {
    return (
        <div className={s.projectContainer}>
            <Pulse>
                <div className={s.projectImage} style={style}>
                    <a href={href} className={s.projectLink} target="_blank">See</a>
                </div>
                <h3 className={s.projectTitle}>{title}</h3>
                <span className={s.projectDescription}>
                {description}
            </span>
            </Pulse>
        </div>
    );
}

export default Poject;