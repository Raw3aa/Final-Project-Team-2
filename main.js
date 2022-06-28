import { Helmet } from "react-helmet";
import './App.css';
function Main(){
    return(
        <div className="App" >
        <Helmet>
         <style>
           {
           "body { background: url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?w=900');     background-repeat: no-repeat;                                                           background-size: cover}; "
           } 
         </style>
       </Helmet>
       <h1 className="title-1">Bonjour! Welcome!</h1 >
       <p className="intro-1">
         It is a nice day to watch and create art .
         Join our fabulous community of arts !
       </p>
       <button  className="log-in-B1">Log in</button>
       <button className="sign-up-B1">sign up</button>
     </div>
    )

}
export default Main;