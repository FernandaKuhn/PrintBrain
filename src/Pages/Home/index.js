import './styles.css';
import img from '../../img/print.png';
import img1 from '../../img/desenho.jpeg';

const Home= () =>{
    return (
        <div className='mainH'>
            <div className='containerHome'>
                <h1>Teve uma ideia de estampa?</h1>
                <h3>Nós tornamos sua imaginação em estampas maneiras!</h3>
                <p>Usar seu estilo e suas ideias de uma forma única, você só encontra aqui!!</p>
                <div className='botoes'>
                
                <a href='http://localhost:3000/contato'><button className='botaoVer'>Entrar em contato</button></a>
               <div>
                <a href='http://localhost:3000/services'><button className='botaoservi'>Saiba mais</button></a>
            </div>
              </div>
            </div>
         <img src={img}/>
        

         </div>

         
    )
}

export default Home;