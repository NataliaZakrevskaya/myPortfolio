import React from 'react';
import s from "./Skill.module.css";

type SkillPropsType = {
    title: string
    icon: any
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={props.icon} className={s.icon}></img>
            <h3 className={s.skillTitle}>{props.title}</h3>
        </div>
    );
}

export default Skill;