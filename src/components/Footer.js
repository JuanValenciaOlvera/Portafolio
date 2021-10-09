import React from 'react'

export const Footer = () => {


    return (
        <div className="footer" id="contacto">
            <div className="footer__text">
                <h4 className="footer_name">Realizado con React js</h4>
                <h5 className="footer_name">Gracias por visitar mi sito</h5>
            </div>
            <div className="footer_icons">
                <a href="https://github.com/JuanValenciaOlvera" target="_blank" className=""><img src="./assets/img/github.svg" alt="" /></a>
                <a href="#"className="" ><img src="./assets/img/linkedin.svg" alt="" /></a>
            </div>
        </div>
    )
}
