// mandatory
import './YoutubeComponent.css'

import React from 'react';
// props to receive data from container/component
const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.img} alt="mern"/>
                <p className="time">{props.time}</p>
            </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        </div>
    )
}

// Set default props untuk komponen tanpa props
YoutubeComponent.defaultProps = {
    img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQHbBk3yBIwBdA/company-background_10000/0?e=2159024400&v=beta&t=_TaPhcev8VTMoKHVw3D8fJVRuKz5BqRqOZuxXyvDRbQ',
    time: '00:00',
    title: 'Title here',
    desc: 'Desc here'
}

export default YoutubeComponent;