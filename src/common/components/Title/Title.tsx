import React from 'react';
import styleContainer from "./../../styles/Container.module.css"

type TitlePropsType = {
    text: string
}

const Title = (props: TitlePropsType) => {
    return (
                <div className={styleContainer.title}>
                    <h3>{props.text}</h3>
                </div>

    );
}

export default Title;