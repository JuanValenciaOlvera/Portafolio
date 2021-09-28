import React from 'react'

export const Cards = ( {id,img,titulo,descrip,link} ) => {

    return (
        <div className="card" >
        <img src={img} alt="Imagen_proyecto" className="card__img" />
        <div className="card_body">
            <h2 className="">{titulo}</h2>
            <p>{descrip}</p>
        </div>
        <a href={ link } target="_blank">Link proyecto</a>
    </div>
    )
}
