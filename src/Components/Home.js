import styled from "styled-components"
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from "./redux/movies/movieSlice";
import { selectUserName } from "./redux/userSlice";
import { selectRecommend, selectNewDisney, selectOriginal, selectTrending } from "./redux/movies/movieSlice";
import Movies from "./Movies";


const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const recommended = useSelector(selectRecommend);
    const newlyArrived = useSelector(selectNewDisney);
    const origin = useSelector(selectOriginal);
    const trendings = useSelector(selectTrending);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useMemo(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        console.log(recommends);
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                        console.log(newDisneys);
                        break;

                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        console.log(originals);
                        break;

                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        console.log(trending);
                        break;
                    default: console.log("Type does not exists");
                }
            });

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending
            }))
        });

    }, [userName]);

    return (
        <>
            <Container>
                <ImgSlider></ImgSlider>
                <Viewers></Viewers>
                <Movies heading="Recommended For You" movies={recommended}></Movies>
                <Movies heading="New Disney+" movies={newlyArrived}></Movies>
                <Movies heading="Originals" movies={origin}></Movies>
                <Movies heading="Trending" movies={trendings}></Movies>
            </Container>
        </>
    );
};

const Container = styled.main`
position:relative;
overflow-x:hidden;
background: url('/Images/home-background.png');
background-position:center;
background-size:cover;
background-repeat:no-repeat;
min-height:100vh;
top:72px;
`;

export default Home;