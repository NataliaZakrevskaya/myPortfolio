import React, {CSSProperties} from 'react';
import s from "./Project.module.scss";

type ProjectPropsType = {
    title: string
    description: string
    style: CSSProperties | undefined
}

const Poject = ({title, description, style}: ProjectPropsType) => {
    return (
        <div className={s.projectContainer}>
            <div className={s.projectImage} style={style}>
                <a href={''} className={s.projectLink}>See</a>
            </div>
            <h3 className={s.projectTitle}>{title}</h3>
            <span className={s.projectDescription}>
                {description}
            </span>
        </div>
    );
}

export default Poject;