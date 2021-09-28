import React from 'react'

export const Skills = () => {
    return (
        <div className=" skills " id="Skills">
            <h1 className="skills__title" >Skills</h1>
        <div className="skills__main">
            <div className="skills_tec animate__animated animate__bounceInLeft   ">
                <div className="skills__tec__item">
                    <img src="./assets/img/html-5.svg" alt="html" className=""/>
                    <h4>HTML</h4>
                </div>
                <div className="skills__tec__item">
                    <img src="./assets/img/css-3.svg" alt="css" className=""/>
                    <h4>CSS</h4>
                </div>
                <div className="skills__tec__item">
                    <img src="./assets/img/js.svg" alt="js" className=""/>
                    <h4>JS</h4>
                </div>
                <div className="skills__tec__item">
                    <img src="./assets/img/physics.svg" alt="react" className=""/>
                    <h4>REACT JS</h4>
                </div>
            </div>
            <div className="skills__img">
                <img src="./assets/img/MERN.jpeg" alt="mern" className=""/>
            </div>
        </div>

        <div className="btn">
            <a className="skills__btn" href="./assets/Docs/CV.pdf" download="CV">Descargar CV</a>
        </div>
        </div>
    )
}
