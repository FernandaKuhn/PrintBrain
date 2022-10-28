import './styles.css';

const Contato = () =>{
    return (
        <div className='containerContato'>
            <div className='subcontato'>
                <div className='contatoagora'> 
                <h1>Contato</h1>
                <h3>Crie sua estampa com a gente!!</h3>
                <p> Preencha as informaçôes abaixo e assim que possível te enviaremos uma mensagem.</p>
                <div>
                <form action="https://api.staticforms.xyz/submit" method="post">
                    <h4>Nome</h4>
                    <input type= "Nome" placeholder='Digite seu nome' />
                    <h4>Email</h4>
                    <input type= "Email" placeholder='Digite seu email' />
                    <h4>Motivo</h4>
                    <textarea type="Motivo" placeholder='Coloque o motivo do contato' />
                    <div>
                    <button className='botaoContato'>Enviar</button> 
                    </div>
                    <input type="hidden" name="accessKey" value="74fc7703-f9c6-4d3e-b0e3-a072e021397e" ></input>
                    <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
                    </form> 
                </div>
                  

                </div>

            </div>
            
        </div>
   
   )
}

export default Contato;