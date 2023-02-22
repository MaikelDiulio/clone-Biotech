
import './App.css';
import Header from './Components/Header/Header';
import Chamada from './Components/Chamada/Chamada';
import Sobre from './Components/Sobre/Sobre';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import Produtos from './Components/Produtos/Produtos';
import Acordeon from './Components/Acordeon/Acordeon';
import Aplicacao from './Components/Aplicacao/Aplicacao';
import Qualidade from './Components/Qualidade/Qualidade';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';
import fluter from "./assets/imgs/fluter.png"
// ..


function App() {
  useEffect(() =>{
    AOS.init({
      duration:1500,
    }, []);
  
  })
  return (
    <>
    <Header/>
    <Chamada/>
    <Sobre/>
    <Produtos/>
    <Acordeon/>
    <Aplicacao/>
    <Qualidade/>
    <Contato/>
    <Footer/>

    <div className='whatsap'>
        <a href="http://lorempixel.com.br/500/400/?1" target="_blank" >
          <img src={fluter} />
        </a>

      </div>
    </>
     
  );
}

export default App;
