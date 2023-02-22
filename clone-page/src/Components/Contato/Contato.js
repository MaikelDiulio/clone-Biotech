import React from 'react'
import { Container } from './Contato.styled'
import cubo from "../../assets/imgs/cubo.png"
import bola from "../../assets/imgs/bola.png"
import telefone from "../../assets/imgs/telefone.png"
import endereco from "../../assets/imgs/clip.png"
import carta from "../../assets/imgs/carta.png"
import { useSpring, animated } from 'react-spring';


function Contato() {


    const props = useSpring({
        from: { transform: 'translate3d(0,-10px,0)' },
        to: { transform: 'translate3d(0,10px,0)' },
        config: { duration: 1500 },
        loop: { reverse: true },
    });


    return (
        <>

            <Container id='contato'>
                <div className='title'>



                    <h2>Entre em contato conosco:</h2>
                    <div className='animation'>

                        <animated.div style={props}>
                            <img src={bola} alt="bola" />
                        </animated.div>
                        <animated.div style={props}>
                            <img src={cubo} alt="cubo" />
                        </animated.div>

                    </div>


                </div>
                <div className='boxContainer'>

                    <div className='box'>
                        <img src={endereco} alt="figure" />
                        <h5>Endereço</h5>
                        <a>AV CE 085 KM 193, N 1, BAIXO <br />   ARACAJU, ITAREMA - CE</a>


                    </div>
                    <div className='box'>
                        <img src={telefone} alt="figure" />
                        <h5>Telefone</h5>
                        <a>+55 85 3051-2536 <br />+55 88 3667-1331</a>


                    </div>
                    <div className='box'>
                        <img src={carta} alt="figure" />
                        <h5>E-mail</h5>
                        <a>originalisbiotech@gmail.com</a>


                    </div>


                </div>
            </Container>

        </>
    )
}

export default Contato