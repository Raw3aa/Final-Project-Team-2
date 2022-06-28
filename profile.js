import './App.css';
import Image from "./components/images"


// import TextField from '@mui/material/TextField';
// import { TextField } from '@mui/material';


// console.log(Draw)

function Proflie(){
    const Profile={  
        position: "absolute",
        left: "520px",
        top:"100px",
        color:"Gray",
    
    }
    const about=  {textAlign: 'center',
    backgroundColor:"#DAE5D0",
    width:"200px", 
    height:"40px",
    padding:"25px",
    borderRadius: "25px",
    position: "absolute",
    top:"380px",
    left:"150px",

   
}
    // const im={
    // }
    return(
        <div>
            <img src="https://media.filfan.com/NewsPics/FilfanNew/large/312459_0.PNG" height={150}width={150} style={{
                position: "absolute",
                top:"150px",
                left:"200px",
                borderRadius: "50%",


                }} />
                <h1 style={{position:"absolute",  top:"300px",
                left:"230px",}} >Diyar</h1>
                <p style={about}>I’m 16 years old Palestine🇵🇸</p>
            
            


          <div style={{  
          borderLeft: "5px solid #DAE5D0",
          height: "700px",
          marginLeft:"440px",
          display:"inline-block"}}>

          </div>

          {/* <TextField  label="enter" /> */}
          <h1 style={Profile}>Profile</h1>
    

          <Image image="https://i.pinimg.com/564x/2e/0a/fd/2e0afd3c4932f95341426cfec5db449d.jpg" 
           name="my third drawing..More" 

          caption="It's my fav"/>
          <Image image="https://i.pinimg.com/564x/c7/10/43/c71043e1dcc1425a1075daa74729263b.jpg"
          name="my second drawing..More"
          caption="I'm proud of myself🖤"/>
          <Image image="https://i.pinimg.com/564x/b2/a0/bd/b2a0bd71485c1ebc94e93733816b857b.jpg"
           name="my first drawing..More"

          caption="I painted this using acrylic colors"/>
        

           
          
          

          
         
       

    
        </div>
    );



}
export default Proflie;

// html order things one by one so when I add <hr/> it will appear  between to element and will make space so we make it inline-block.(in the event adove)


