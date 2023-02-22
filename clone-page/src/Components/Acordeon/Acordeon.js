import React, { useState } from 'react';
import { BoxAcordeon, ContainerAcordeon } from './Acordeon.Styled';
import arrow from "../../assets/imgs/arrow.png"

function Acordeon() {
    const [propriedadesAbertas, setPropriedadesAbertas] = useState(false);
    const [especificacoesAbertas, setEspecificacoesAbertas] = useState(false);

    const handlePropriedadesClick = () => {
        setPropriedadesAbertas(!propriedadesAbertas);
    };

    const handleEspecificacoesClick = () => {
        setEspecificacoesAbertas(!especificacoesAbertas);
    };

    return (
        <ContainerAcordeon>
            <div className='box-left'>
                <h2>Propriedades e <br /> Especificações</h2>

            </div>
            <BoxAcordeon>
                <div className='propriedade'>
                    <div className='prop'>
                        <h3 >Propriedades</h3>
                        <img src={arrow} onClick={handlePropriedadesClick}/>

                    </div>
                    {propriedadesAbertas && (
                        <p>
                             ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed e <br />
                              t dolor nec ante porttitor feugiat. Sed bibendum, turpis eu mol<br />
                            <br />
                            ✔ lis tincidunt, eros risus pulvinar urna, ac egestas nisi tellus<br />
                            id ex. Sed vel elit nec tellus rutrum tempor sit amet eget qua<br />
                            <br />
                            ✔ m. Proin vel dolor ut velit ultrices tempus. Quisque facilisis<br />
                            turpis quis odio pellentesque, ut facilisis quam luctus.
                        </p>
                    )}
                </div>
                <div className='especifi'>
                <div className='prop'>
                    <h3 >Especificações</h3>
                    <img src={arrow} onClick={handleEspecificacoesClick}/>


                </div>
                    {especificacoesAbertas && (
                        <p>
                            ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed e <br />
                            t dolor nec ante porttitor feugiat. Sed bibendum, turpis eu mol<br />
                            <br />
                            ✔ lis tincidunt, eros risus pulvinar urna, ac egestas nisi tellus<br />
                            id ex. Sed vel elit nec tellus rutrum tempor sit amet eget qua<br />
                            <br />
                            ✔ m. Proin vel dolor ut velit ultrices tempus. Quisque facilisis<br />
                            turpis quis odio pellentesque, ut facilisis quam luctus.
                        </p>
                    )}
                </div>
            </BoxAcordeon>
        </ContainerAcordeon>
    );
}

export default Acordeon;