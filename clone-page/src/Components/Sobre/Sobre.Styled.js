import styled from "styled-components";


export const ContainerSobre = styled.div`

width: 100%;
height: 96vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
@media (max-width: 998px){
    height: 60vh;

}

`

export const BoxSobre = styled.div`
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
    margin-top: 0px;


}

p{
    color: #7F8081;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 19px;
    
}

.info{
    transition-timing-function: ease;
    transition-duration:2s;

}

.info:hover{
    opacity: 0;
    transform: translateZ(0);
}

.escuro{
    color: #312783;
}
.claro{
color:#17A9A3 ;
}

.box-img{
    img{
        width: 500px;
        height: 500px;
    }
}

`