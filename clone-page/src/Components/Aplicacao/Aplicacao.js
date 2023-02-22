import React from 'react'
import cosmeticos from "../../assets/imgs/cosmetico.png"
import camarao from "../../assets/imgs/Vector.png"
import agricultura from "../../assets/imgs/agricultura.png"
import agua from "../../assets/imgs/agua.png"
import group from "../../assets/imgs/Group.png"
import { ContainerApli } from './Aplicacao.style'
import { useSpring, animated } from 'react-spring';

function Aplicacao() {




    
        const props = useSpring({
          from: { transform: 'translate3d(0,-10px,0)' },
          to: { transform: 'translate3d(0,10px,0)' },
          config: { duration: 1500 },
          loop: { reverse: true },
        });




    return (
        <>
            <ContainerApli id="aplicacao" data-aos="fade-up">
                <div className='title'>
                    <h2>Aplicações</h2>
                </div>
                <div className='box'>
                    <img src={cosmeticos} />
                    <h5>Cosméticos</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={agricultura} />
                    <h5>Agricultura</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={group} />
                    <h5>Imobilização e <br />Mocrorganismos</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={cosmeticos} />
                    <h5>Cosméticos</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={cosmeticos} />
                    <h5>Cosméticos</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={cosmeticos} />
                    <h5>Cosméticos</h5>
                    <button>Saiba Mais</button>


                </div>
                <div className='box'>
                    <img src={cosmeticos} />
                    <h5>Cosméticos</h5>
                    <button>Saiba Mais</button>


                </div>

                <animated.div style={props}>   
                <div className='camarao'>
                    <img src={camarao}/>
                </div>
                </animated.div>

            </ContainerApli>

        </>
    )
}

export default Aplicacao