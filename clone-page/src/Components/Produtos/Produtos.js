import React from 'react'
import { BoxProdutos, ContainerProduto } from './Produtos.styled'
import imgP from "../../assets/imgs/produto.png"
import nossosProdutos from "../../assets/imgs/NossosProdutos.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Produtos() {

 
  return (

    <ContainerProduto id='produtos'>
      <BoxProdutos>
        <div className='info' data-aos="fade-right">
          <span><img src={nossosProdutos} /></span>
          <div className='title'>
            <h2 className="claro">Quitina e Quitosana</h2>
            
          </div>
          <br />

          <p>lorem t is a long established fact that a reader<br />
            will be distracted by the readable content of a page<br />
            when looking at its layout. The point of using Lorem<br />
            Ipsum is that it has a more-or-less normal distribution <br />
            of letters, as opposed to using 'Content here, content<br />
            here', making it look like readable English. Many desktop<br />
            publishing packages and web page editors now use Lorem <br />
            Ipsum as their default model text, and a search for </p>

          <br />
          <br />

          <p>
            of letters, as opposed to using 'Content here, content<br />
            here', making it look like readable English. Many desktop<br />
            publishing packages and web page editors now use Lorem <br />
            Ipsum as their default model text, and a search for </p>



        </div>
        <div className='box-img' data-aos="fade-left">
          <img src={imgP} />

        </div>
      </BoxProdutos>
      

    </ContainerProduto>



  )
}

export default Produtos