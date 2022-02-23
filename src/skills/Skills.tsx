import React from 'react';
import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title="JAVASCRIPT"/>
                    <Skill title="CSS3"/>
                    <Skill title="REACT"/>
                    <Skill title="REDUX"/>
                    <Skill title="TYPESCRIPT"/>
                    <Skill title="HTML5"/>
                    <Skill title="ES6"/>
                    <Skill title="STORYBOOK"/>
                    <Skill title="MATERIAL UI"/>
                    <Skill title="AXIOS"/>
                    <Skill title="REST API"/>
                    <Skill title="GIT"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;