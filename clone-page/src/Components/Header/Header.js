// import React, { useState, useEffect } from 'react';
import logo from "../../assets/imgs/logo.svg"
import instagram from "../../assets/imgs/i.png"
import facebook from "../../assets/imgs/f.png"
import linkedin from "../../assets/imgs/l.png"
import youtub from "../../assets/imgs/y.png"
import twiter from "../../assets/imgs/t.png"
import { Container, Logo, Nav, One, Redes } from './Header.styled'

import { useState, useEffect } from 'react';



function Header() {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    return (
        <Container className={isSticky ? "sticky" : ""}>

            <div className='listas'>
                <Logo href='#'>

                    <img src={logo} />
                </Logo>
                <One>
                    <li>
                        <a href='#home' role="button">Home</a>
                    </li>
                    <li>
                        <a href='#sobre' role="button">Sobre<br />Nós</a>
                    </li>
                    <li>
                        <a href='#produtos' role="button">Quitina e <br /> Quitosana</a>
                    </li>
                    <li>
                        <a href='#aplicacao' role="button">Aplicações</a>
                    </li>
                    <li>
                        <a href='#qualidade' role="button">Qualidade</a>
                    </li>
                    <li>
                        <a href='#contato' role="button">Contato</a>
                    </li>



                </One>
                <Redes>                  
                <dvi className="align">
                    <a href='#'><img src={instagram} /></a>

                </dvi>
                <dvi className="align">
                    <a href='#'><img src={facebook} /></a>

                </dvi>
                <dvi className="align">
                    <a href='#'><img src={linkedin} /></a>

                </dvi>
                <dvi className="align">
                    <a href='#'><img src={youtub} /></a>


                </dvi>
                <dvi className="align">
                    <a href='#'><img src={twiter} /></a>

                </dvi>
                </Redes>
            </div>
        </Container>
    );
}

export default Header;