import styled from "styled-components";










export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13.11vh;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  
  &.sticky {
    position: fixed;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    height: 15.89vh;
  }

  
   .listas{
       display: flex;
       flex-direction: row;
       justify-content:space-between;
       width: 100%;
   }

    
    
    `;




export const Logo = styled.a`

margin: 2vh;
width: 14.64vw;
height: 9.382308845577212vh;

img{
  width:12.51vw;
  height:7.94vh;
}

`



export const Redes = styled.ul`

display: flex;
justify-content: space-between;
align-items: center;
width: 180px;
margin:0 20px ;

a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #eef4fb;
  border-radius: 5px;
  margin: 0 10px;
  text-decoration:none;
}

  .align{
    display: flex;
    align-items: center;
    justify-content: center;
  }

a:hover{
background-color:#444694;

}

img :hover{
  background:white;
}

img{
  width: 15px;
  height: 16px;
  
}



`





export const One = styled.ul`
    
   /* color:#0d6efd;;
   /* text-decoration:none; */
   padding: 0;
   align-items: center;
   font-weight: bold;
   font-family: 'IBM Plex Sans', sans-serif;
   font-size: 19px;
   letter-spacing: -.2px;
   color: #fff;
   height: 100%;
   width: 600px;
   display: flex;
   justify-content: space-between;

   
   
   
   
   position: relative;


   @media (max-width: 998px){
    
   }


   a {
  margin: 0 20px;
  color: #312783;
  position: relative;
  text-decoration:none;
  
  }



a::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #17A9A3;
  transition: width 0.3s ease;
}

a:hover::before {
  width: 100%;
  background:#17A9A3 ;

}
a:hover{

  color:#17A9A3 ;

} 



`
















