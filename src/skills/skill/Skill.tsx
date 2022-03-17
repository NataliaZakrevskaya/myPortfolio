import React, {useState} from 'react';
import s from "./Skill.module.scss";
// @ts-ignore
import RubberBand from 'react-reveal/RubberBand';
// @ts-ignore
import Tilt from 'react-tilt'

type SkillPropsType = {
    title: string
    icon: any
}

const Skill = (props: SkillPropsType) => {


    return (
        <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
            <div className={s.skill}>
                <RubberBand>
                    <img src={props.icon} className={s.icon}></img>
                    <h3 className={s.skillTitle}>{props.title}</h3>
                </RubberBand>
            </div>
        </Tilt>
    );
}

export default Skill;