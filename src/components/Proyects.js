import React from 'react'
import { Cards } from './Cards'
import { cardsInfo } from '../Data/card';

export const Proyects = () => {

    const cards = cardsInfo;


    return (
        <div className="proyects" id="proyects">
            <h1 className="proyects__title" id="">Proyectos</h1>
        <div className="proyects__items">
            {

                cards.map( card => (
                    <Cards 
                    key={card.id}
                   { ...card}>
                    </Cards>
                ))
            }
           
        </div>
        
        </div>
    )
}
