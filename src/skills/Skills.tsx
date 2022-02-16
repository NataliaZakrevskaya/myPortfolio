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
                    <Skill title="JS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua Ut enim..."/>
                    <Skill title="CSS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua Ut enim..."/>
                    <Skill title="REACT" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua Ut enim..."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;