import React from 'react'
import chamadaImg from "../../assets/imgs/chamada.svg"
import { Container } from './Chamada.styled'

function Chamada() {
  return (
    <>
    <Container id='home'>
        <img src={chamadaImg}/>
    </Container>
    </>
  )
}

export default Chamada