import React from 'react'
import { Container } from './Footer.styled'
import linkedin from "../../assets/imgs/linkedin.svg"
import github from "../../assets/imgs/github.svg"

function Footer() {
    return (
        <div>

            <Container>


                <a href='https://www.linkedin.com/in/maikel-diulio-5a3a49212/' target="_blank" >
                    <img src={linkedin} />
                </a>

                <a href="https://github.com/MaikelDiulio" target="_blank" >
                    <img src={github} />
                </a>


            </Container>

        </div>
    )
}

export default Footer