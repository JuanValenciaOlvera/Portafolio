import React from 'react'

export const Navbar = () => {
    


    const handleMenu = () => {
        const menu = document.getElementById('menu');
        if(menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else{
            menu.classList.add('show');
        }
    }
    return (
        <>
        <nav className="navbar" >
            <h1 className="navbar__title"><span>JUANVO</span></h1>
            <div className="navbar__menu menu_res " id="menu" onClick={handleMenu}>
                <a href="#home" >Inicio</a>
                <a href="#Skills" >Skills</a>
                <a href="#proyects" >Proyectos</a>
                <a href="#contacto"  id="footer">Contacto</a>
                {/* <button><img src="./assets/img/day-and-night.svg" alt=""  /></button> */}
            </div>
        </nav>
        <span>
            <button className="btn__menu" 
            onClick= { handleMenu } id="btnMenu">
                <img src="./assets/icons/menu.svg" alt="btn_menu" />
            </button>
        </span>

        </>
    )
}
