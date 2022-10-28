import './styles.css';
import React from 'react';
import ideia from '../../img/ideia.png';
import desenho from '../../img/desenho.jpeg';
import camisa from '../../img/camisa.jpeg';


const Services = () =>{
    return (
        <div>
        <h1 className='principio'>Como funciona o Print Brain?</h1>
        <div className='services'>  
            <div className='card'>
                <h2> Você tem uma ideia</h2>
                <img className='imglampada' src={ideia}></img>
                <p>Quando surge aquela ideia legal, ás vezes, um pouco fora do normal, de criar um desenho para sua roupa. Melhor não deixar passar né?!</p>

            </div>
            
            <div className='card'>
                <h2> Criamos o design</h2>
                <img className='imgdesenho' src={desenho}></img>
                <p>Criamos o protótipo da estampa que você descreveu, e vamos ajeitando até estar do jeito imaginado.</p>
        </div>
        <div className='card'>
                <h2> Protótipo final e entrega da estampa</h2>
                <img className='imgcamisa' src={camisa}></img>
                <p>Por fim, mostramos como irá ficar, fazemos a estampa e enviamos.</p>
        
        </div>
        </div>
        <div className='proximo'>
        <h1>Ficou interessado?</h1>
        <h3>Entre em contato conosco!!</h3>
        </div>
        </div>
    )
}

export default Services;