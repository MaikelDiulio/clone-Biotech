
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
    </>
     
  );
}

export default App;
