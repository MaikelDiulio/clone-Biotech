import React from 'react'
import history from "../../assets/imgs/historia.png"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BoxQ, ContainerQ } from './Qualidade.styeld';
// ..


function Qualidade() {

 
  return (

    <ContainerQ id='qualidade'>
      <BoxQ>
        <div className='box-img' data-aos="fade-right">
          <img src={history} />

        </div>
        <div className='info' data-aos="fade-left">
          
          <div className='title'>
           <h2>Qualidade</h2>
          </div>
          <br />

          <p>lorem t is a long established fact that a reade<br />
            will be distracted by the readable content of a <br />
            when looking at its layout. The point of using L<br />
            Ipsum is that it has a more-or-less normal distr <br />
            of letters, as opposed to using 'Content here, c<br />
            here', making it look like readable English. Ma<br />
            publishing packages and web page editors now <br />
            Ipsum as their default model text, and a search  </p>

          <br />
          <br />

          <p>
            of letters, as opposed to using 'Content here, <br />
            here', making it look like readable English. M<br />
            publishing packages and web page editors now  <br />
            Ipsum as their default model text, and a search </p>



        </div>
      </BoxQ>
      

    </ContainerQ>



  )
}

export default Qualidade