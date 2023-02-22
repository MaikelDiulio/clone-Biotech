import styled from "styled-components";


export const ContainerQ = styled.div`

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

export const BoxQ = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row-reverse;
align-items:center ;
justify-content:center;
background-color:#494191;


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
    color:white ;
    font-size: 40px;
    margin-top: 30px;


}

p{
    color: #7F8081;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 19px;
    color: white;
    
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