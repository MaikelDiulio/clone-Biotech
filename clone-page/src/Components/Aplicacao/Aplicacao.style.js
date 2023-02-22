import styled from "styled-components";

export const ContainerApli = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-wrap:wrap;

.title{
    width: 28.43vw;
    height:41.33vh ;
    display: flex;
    align-items:center;
    justify-content: center;
    margin:0 10px ;

        h2{
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 38px;
          color: #312783;


        }
}


 .box{
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:15px;
    background-color:white;
    width: 28.43vw;
    height:41.33vh ;
    border-radius: 10px;
    margin: 10px;

    h5{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 22px;

    }

    button{
        width: 9vw;
        height: 6vh;
        background-color: #0d6efd;
        border: none;
        border-radius: 5px;
        color: white;

        :hover {
        cursor:pointer;
        filter: brightness(0.8) ;
        
        
        }
  
       :active {
        filter: brightness(0.8);
        color: white;
        box-shadow: 1px 1px 1px 1px gray;
       }
    

    }

    h5:hover{
      color:#17A9A3 ;

    }
 

 }

 .camarao{
    animation: jumpFour 3s infinite linear;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: jumpFour;
 }

`