import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 630px;
    display: flex;
    flex-direction: column;



    h2{
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 60px;
    color: #312783;

    }

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 50%;
        background-color: #f6fcff;

        .animation{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
    }


    .boxContainer{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        background-color: white;
      
        .box{
         display:flex ;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         gap:15px;
         background-color:white;
         width: 27vw;
         height:45vh ;
         border-radius: 5px;
         box-shadow:  0 0 10px 10px #e2e8f5;
         margin: 10px;
     
         h5{
         font-family: 'IBM Plex Sans', sans-serif;
         font-size: 22px;
         color: #312783;

         
     
         }

     
         a{
            color:#17A9A3;
            font-size: 22px;
         }
     
         }
     
         h5:hover{
           color:#17A9A3 ;
     
         }
      
         }  





`