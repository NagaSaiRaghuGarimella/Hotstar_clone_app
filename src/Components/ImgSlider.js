import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props)=>{
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay: true,
    };

    const slideImages = [
        {src:"/Images/slider-badging.jpg"},
        {src:"/Images/slider-badag.jpg"},
        {src:"/Images/slider-scale.jpg"},
        {src:"/Images/slider-scales.jpg"},
    ]
    return(
        <div>
            <Carousel {...settings}>

            {slideImages.map((image,index)=>{
             return <Wrap key={index}>
             <a>
                 <img src={image.src} alt="" />
            </a>    
            </Wrap> 
            })}
            </Carousel>
        </div>
    );
};

const Carousel = styled(Slider)`
//  margin-top:20px;
 margin:20px 40px;
 padding:0px 20px;

 & > button {
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;

 &:hover{
    opacity:1;
    transition:opacity 0.2s ease 0s;
 }
}

 ul li button {
    &:before {
        font-size: 10px;
        color: grey;
    }
}

li.slick-active button:before {
    color: white;
}

.slick-list{
   overflow: initial;
}
.slick-prev{
    left:-75px;
}
.slick-next{
    right:-75px
}
`;

const Wrap = styled.div`
border-radius:4px;
cursor:pointer;
position:relative;

a{
    border-radius:4px;
   box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
   cursor-pointer;
   display:block;
   position:relative;
   padding:4px;

   img{
   width:100%;
   height:100%;
   }

   &:hover{
    padding:0;
    border: 4px solid rgba(249,249,249,0.8);
    transition-duration:300ms;
   }
}
`;


export default ImgSlider;
