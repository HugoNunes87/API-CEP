import React from 'react';
import './App.css';
import Footer from './componentes/Footer/';

function App() {


  const showData = (result) => {
    for (const campo in result) {
      if (document.getElementById('' + campo)) {
        document.getElementById('' + campo).value = result[campo]
      }
    }
  }
  const cep = () => {
    let pesquisa = document.getElementById('cep').value
    const opções = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, opções)
      .then(response => {
        response.json()
          .then(data => showData(data))
      })
      .catch(e => console.log('Deu Erro!!'))

  }


  return (
    <div>
      <nav className="navbar navbar-expand-md  mb-6" class="navbar" >
        <a className="navbar-brand text-white mx-auto" href="#top" >
          CONSULTA DE ENDEREÇOS
        </a>
      </nav>
      <br></br>
      <main className='container'>
        <form className='jumbotron'>
          <div className='form-group'>
            <label htmlFor="cep">CEP</label>
            <input type="text" className='form-control' id='cep' onBlur={cep} onKeyUp={cep} maxLength="9"></input>
            <small>00000-000</small>
          </div>
          <div className='form-group'>
            <label htmlFor='logradouro'>Logradouro</label>
            <input type="text" className='form-control' id='logradouro' ></input>
            <small>Rua.</small>
          </div>
          <div className='form-group'>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" className='form-control' id='bairro'></input>
            <small>Bairro</small>
          </div>
          <div className='form-group'>
            <label htmlFor="localidade">Localidade</label>
            <input type="text" className='form-control' id='localidade'></input>
            <small>Cidade</small>
          </div>
          <div className='form-group'>
            <label htmlFor="uf">UF</label>
            <input type="text" className='form-control' id='uf'></input>
            <small>Estado</small>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
