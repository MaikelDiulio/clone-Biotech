import styled from "styled-components";

export const ContainerAcordeon = styled.div`
width: 100%;
min-height: 60vh;
max-height:100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: start;



.box-left{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100%;
    width:50%;
    border-radius: 10px;
}

h2{
    color: #312783;
    font-size: 40px;
    font-family: 'IBM Plex Sans', sans-serif;


}
`


export const BoxAcordeon = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items:center ;
    margin-left: 80px;
    
    color: #312783;

    .propriedade{
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        /* height: 40vh; */
        background: white;
        border-radius: 10px;
        text-align:start ;
        margin-right: 30px;

        h3{
            margin: 10px 20px;
            font-family: 'IBM Plex Sans', sans-serif;
 

            
        }

        p{
            text-align: start;
            margin: 10px 20px;
            color: #4D4D4D;
        }
    }

    .prop{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img{
            border: none;
            width: 12px;
            height: 20px;
            margin-right:15px
            
        }
        
        :hover{
            cursor: pointer;
        }
        :active{
            cursor: pointer;
           
        }
    }


    .especifi{
        margin: 10px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        /* height: 40vh; */
        background: white;
        border-radius: 10px;
        text-align:start ;
        margin-right: 38px;



        h3{
            margin: 10px 20px;
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight:bold;
            font-size: 20px;

            
        }

        p{
            text-align: start;
            margin: 10px 20px;
            color: #4D4D4D;
        }
    }


`