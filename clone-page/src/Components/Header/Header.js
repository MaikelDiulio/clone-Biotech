import React from 'react'
import logo from "../../assets/imgs/logo.svg"
import instagram from "../../assets/imgs/i.png"
import facebook from "../../assets/imgs/f.png"
import linkedin from "../../assets/imgs/l.png"
import youtub from "../../assets/imgs/y.png"
import twiter from "../../assets/imgs/t.png"
import { Container, Logo, Nav, One } from './Header.styled'
import Sobre from "../Sobre/Sobre"


function Header() {
    return (
        <>
            <Container>
                <Logo href='#'>
                   
                    <img src={logo}/>
                    
                </Logo>
                <div className='listas'>

                    <One>
                        <a href='#home' role="button">Home</a>
                        <a href='#sobre' role="button">Sobre <br />Nós</a>
                        <a href='#produtos' role="button">Quitina e <br /> Quitosana</a>
                        <a href='#aplicacao' role="button">Aplicações</a>
                        <a href='#qualidade' role="button">Qualidade</a>
                        <a href='#contato' role="button">Contato</a>


                    </One>
                    <ul>
                        <a href='#'><img src={instagram} /></a>
                        <a href='#'><img src={facebook} /></a>
                        <a href='#'><img src={linkedin} /></a>
                        <a href='#'><img src={youtub} /></a>
                        <a href='#'><img src={twiter} /></a>
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default Header