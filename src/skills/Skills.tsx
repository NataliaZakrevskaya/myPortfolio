import React from 'react';
import s from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import js from "./../common/assets/icons/js.png"
import css3 from "./../common/assets/icons/css3.png"
import reactIcon from "./../common/assets/icons/reactIcon.png"
import reduxIcon from "./../common/assets/icons/redux.png"
import ts from "./../common/assets/icons/ts.png"
import html5 from "./../common/assets/icons/html5.png"
import es6Icon from "./../common/assets/icons/es6.jpg"
import storybookIcon from "./../common/assets/icons/storybook.png"
import materialUi from "./../common/assets/icons/material-ui.png"
import axoisIcon from "./../common/assets/icons/axios.png"
import restApi from "./../common/assets/icons/api.png"
import git from "./../common/assets/icons/git.png"

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title="JAVASCRIPT" icon={js} />
                    <Skill title="CSS3" icon={css3} />
                    <Skill title="REACT" icon={reactIcon} />
                    <Skill title="REDUX" icon={reduxIcon} />
                    <Skill title="TYPESCRIPT" icon={ts}/>
                    <Skill title="HTML5" icon={html5}/>
                    <Skill title="ES6" icon={es6Icon}/>
                    <Skill title="STORYBOOK" icon={storybookIcon}/>
                    <Skill title="MATERIAL UI" icon={materialUi}/>
                    <Skill title="AXIOS" icon={axoisIcon} />
                    <Skill title="REST API" icon={restApi} />
                    <Skill title="GIT" icon={git} />
                </div>
            </div>
        </div>
    );
}

export default Skills;