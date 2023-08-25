import { styled } from 'styled-components'
import { auth } from '../Firebase'
import { provider } from '../Firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../Components/redux/userSlice';
import { useEffect } from 'react';


const Header = (props) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userName = useSelector(selectUserName);
   const userPhoto = useSelector(selectUserPhoto);

   useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
         if (user) {
            setUser(user);
            navigate("/home");
         }
      }, [userName])
   })
   const handleClick = () => {
      if (!userName) {
         auth.signInWithPopup(provider).then(result => {
            console.log(result);
            setUser(result.user);
         })
            .catch(error => { alert(error.message) });
      }

      else if (userName) {
         auth.signOut().then(() => {
            dispatch(setSignOutState());
            navigate("/");
         })
            .catch((err) => alert(err.message))
      }
   }


   const setUser = (user) => {
      dispatch(
         setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
         })
      )
   }
   return (
      <Nav>
         <Logo>
            <img src="/Images/logo.svg" alt="Disney" />
         </Logo>
         {!userName ? (
            <Login onClick={handleClick}>Login</Login>
         ) : (
            <>
               <NavMenu>
                  <a href="/home">
                     <img src="/Images/home-icon.svg" alt="" />
                     <span>HOME</span>
                  </a>
                  <a href="/search">
                     <img src="/Images/search-icon.svg" alt="" />
                     <span>SEARCH</span>
                  </a>
                  <a href="/watchlist">
                     <img src="/Images/watchlist-icon.svg" alt="" />
                     <span>WATCHLIST</span>
                  </a>
                  <a href="/originals">
                     <img src="/Images/original-icon.svg" alt="" />
                     <span>ORIGINALS</span>
                  </a>
                  <a href="/movies">
                     <img src="/Images/movie-icon.svg" alt="" />
                     <span>MOVIES</span>
                  </a>
                  <a href="/series">
                     <img src="/Images/series-icon.svg" alt="" />
                     <span>SERIES</span>
                  </a>
               </NavMenu>
               <SignOut>
                  <UserImg src={userPhoto} alt={userName} />
                  <DropDown>
                     <span onClick={handleClick}>Sign out</span>
                  </DropDown>
               </SignOut>
            </>
         )}
      </Nav>
   );
}

const Nav = styled.nav`
 position:fixed;
 top:0;
 left:0;
 right:0;
 height:70px;
 letter-spacing:16px;
 background-color:#090b13;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 36px;
 z-index:3;
 `;

const Logo = styled.a`
 padding:0;
 width:80px;
 margin-top:4px;
 font-size:0;
 display: inline-block;
 img{
   display:block;
   width:100%;
 }
 `;

const NavMenu = styled.div`
 align-items:center;
 display:flex;
 flex-flow: row nowrap;
 height:100%;
 justify-content:flex-end;
 margin:0px;
 padding:0px;
 position:relative;
 margin-right:auto;
 margin-left:25px;

 a{
    display:flex;
    align-items:center;
    padding:0 12px
 }

 img{
   height:20px;
   width-20px;
   z-index:auto;
 }

 span{
   font-size:13px;
   padding:2px 0px;
   line-height:1.08;
   white-space:nowrap;
   letter-spacing:1.42px;
   line-height:1.08px;
   position:relative;
}

@media (max-width: 768px){
   display:none;
}
 `;
const Login = styled.a`
 background-color:#000;
 padding: 8px 16px;
 text-transform:uppercase;
 letter-spacing:1.5px;
 border:1px solid white;
 border-radius:4px;
 transition: all 0.2s ease 0s;

 &:hover{
 background-color:#f9f9f9;
 color:#000;
 }
 `;

const UserImg = styled.img`
 height:100%;
 `;

const DropDown = styled.div`
 position:absolute;
 top:48px;
 right:0px;
 background:rgb(19,19,19);;
 border:1bx solid rgb(151,151,151,0.36);
 border-radius:4px;
 boxshadow:rgb(0 0 0 / 50%) 0px 0px 10px 0px;
 padding:10px;
 font-size:14px;
 letter-spacing:3px;
 width:100px;
 opacity:0;
 `;

const SignOut = styled.div`
 position:relative;
 height:48px;
 width:46px;
 display:flex;
 cursor: pointer;
 align-items: center;
 justify-content:center;

 ${UserImg}{
   border-radius:50%;
   width:100%;
   height:100%;
 }

 &:hover{
   ${DropDown}{
      opacity:1;
      transition-duration: 1s;
   }
 }

 `;

export default Header;
