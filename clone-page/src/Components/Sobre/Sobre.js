import React from 'react'
import { BoxSobre, ContainerSobre } from './Sobre.Styled'
import history from "../../assets/imgs/historia.png"
import biotech from "../../assets/imgs/biotech.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Sobre() {

 
  return (

    <ContainerSobre id='sobre'>
      <BoxSobre>
        <div className='info' data-aos="fade-left">
          <span><img src={biotech} /></span>
          <div className='title'>
            <h2 className='escuro'>Nossa</h2>
            <h2 className='claro'>História</h2>
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
        <div className='box-img' data-aos="fade-right">
          <img src={history} />

        </div>
      </BoxSobre>
      

    </ContainerSobre>



  )
}

export default Sobre