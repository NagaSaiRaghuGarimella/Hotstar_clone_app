import styled from "styled-components"
import { Link } from "react-router-dom";
import React from 'react'

const Movies = (data) => {
    const { heading, movies } = data;
    return (
        <Container>
            <h4>{heading}</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))}
            </Content>
        </Container>
    )
}

const Container = styled.div`
 padding:0 26px 26px;
`;
const Content = styled.div`
display:grid;
 grid-gap:25px;
gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));

@media(max-width:768px){
    grid-template-columns: repeat(2,minmax(0,1fr));
}
`;

const Wrap = styled.div`
// padding-top:56.25%;
border-radius:10px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
cursor: pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezeir(0.25,0.46,0.45,0.9);
border: 3px solid rgba(249,249,249,0.1);

img{
    inset:0px;
    display:block;
    height:100%;
    object-fit:cover;
    opacity:1;
    position:obsolute;
    transition: opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;
}

&:hover{
    box-shadow:2px 4px 2px 5px rgba(0,0,0,0.7);
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
}
`

export default Movies;