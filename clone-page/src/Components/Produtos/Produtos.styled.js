import styled from "styled-components";


export const ContainerProduto = styled.div`

width: 100%;
height: 89vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
@media (max-width: 998px){
    height: 60vh;

}

`

export const BoxProdutos = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items:center ;
justify-content:center;


@media (max-width: 998px){
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.title{
    display: flex;
    
}
.title h2{
    margin: 0.5vw;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 40px;
    margin-top: 30px;


}

p{
    color: #7F8081;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 19px;
    
}

.box-img{
    img{
        width: 395px;
        height: 395px;
    }
}



.escuro{
    color: #312783;
}
.claro{}
color:#17A9A3 ;


`