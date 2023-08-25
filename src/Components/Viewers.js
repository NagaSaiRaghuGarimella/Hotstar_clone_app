import styled from 'styled-components';

import React from 'react'

const viewersIv = [
  {
    src: "/Images/viewers-disney.png",
    vsrc: "/Videos/1564674844-disney.mp4"
  },
  {
    src: "/Images/viewers-marvel.png",
    vsrc: "/Videos/1564676115-marvel.mp4"
  },
  {
    src: "/Images/viewers-national.png",
    vsrc: "/Videos/1564676296-national-geographic.mp4"
  },
  {
    src: "/Images/viewers-pixar.png",
    vsrc: "/Videos/1564676714-pixar.mp4"
  },
  {
    src: "/Images/viewers-starwars.png",
    vsrc: "/Videos/1608229455-star-wars.mp4"
  },
]

const Viewers = (props) => {
  return (
    <Container>
      {viewersIv.map((viewer, index) => {
        return <Wrap key={index}>
          <img src={viewer.src} alt="" />
          <video autoPlay={true} muted loop={true} playinline="true">
            <source src={viewer.vsrc} type='video/mp4' />
          </video>
        </Wrap>
      })}
    </Container>
  )
}

const Container = styled.div`
margin-top:25px;
padding:30px 25px 26px;
display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns: repeat(5, minmax(0,1fr));
@media (max-width:768px){
    grid-template-columns: repeat(1, minmax(0,1fr));
}
`
const Wrap = styled.div`
padding-top:56.25%;
border-radius:10px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
cursor:pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezeir(0.25, 0.46, 0.45,0.94);
border: 3px solid rgba(249,249,249,0.1);
img{
    inset:0px;
    display:block;
    height:100%;
    object-fit: cover;
    opacity:1;
    position:absolute;
    transition:opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;
}

video{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  opacity:0;
  z-index:0;
}

&:hover{
  box-shadow:2px 4px 2px 5px rgba(0,0,0,0.7);
  transform:scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
  video{
  opacity:1;
  }
}

`;
export default Viewers