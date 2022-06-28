import React from "react"
function Image(props){

    const div={
        display:"inline-block",
        margin:"20px",
        float:'right',
        marginTop:"200px",
    }

    const p={
        textAlign: 'center',
        marginTop:"20px",
        backgroundColor:"#DAE5D0",
        width:"200px", 
        height:"40px",
        padding:"25px",
        borderRadius: "25px"
    }
   
    return(
        <div style={div}>
         <img alt="image" src={props.image} height={300} width={250}/>
         <h3 style={{textAlign: 'center'}}>{props.name}</h3>
         {/* <p style={p}>{props.caption}</p> */}
         {/* <button style={{marginLeft:"80px",marginTop:"10px",padding:"10px",borderRadius:"10px"}}>Read more...</button> */}
         {/* inside the style here we replace the dash - with capitalizing the first letter of the second word*/}
       </div>
    
    )
    
}
export default Image
// 3 ways to style react components
// img tag is inline
// div tag is block
// return is important
// (hhhhhhhhhhhhhhhhh..) for example is cosidered as a one word so maxwidth will not work