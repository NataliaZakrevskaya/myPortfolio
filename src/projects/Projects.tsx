import React from 'react';
import s from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/Title/Title";
import socialImg from "./../common/assets/projects-background/socialNetworkImg.png";
import todoImg from "./../common/assets/projects-background/todoListImg.png";


const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }
    const todoList = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project
                        style={socialNetwork}
                        title="Social Network"
                        description="A social network is a website that
                        allows people with similar interests
                        to come together and share information, photos and videos."
                    />
                    <Project
                        style={todoList}
                        title="Todo list"
                        description="What is a ToDo List?
                    The definition is a simple one. It's a list of tasks you need
                    to complete, or things that you want to do. Most typically,
                    they're organised in order of priority. Traditionally, they're
                    written on a piece of paper or post it notes and acts as a memory aid.
                    "/>
                </div>
            </div>

        </div>
    );
}

export default Projects;