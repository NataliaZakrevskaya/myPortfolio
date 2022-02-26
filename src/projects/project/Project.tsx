import React from 'react';
import s from "./Project.module.css";
import project1 from "./project1.png"

type ProjectPropsType = {
    title: string
    description: string
}

const Poject = (props: ProjectPropsType) => {
    return (
        <div className={s.projectContainer}>
            <div className={s.projectImageContainer}>
                <a href={''} className={s.projectLink}>See</a>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.projectDescription}>
                {props.description}
            </span>
        </div>
    );
}

export default Poject;