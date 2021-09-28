import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Presentacion } from './Presentacion';
import { Proyects } from './Proyects';
import { Skills } from './Skills';



export const Index = () => {


    return (
        <main  className="main">
            <Navbar />
            <Presentacion />
            <Skills />
            <Proyects />
            <Footer />
        </main>
    )
}
