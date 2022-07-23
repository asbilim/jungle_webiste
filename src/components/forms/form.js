import { useState } from "react";

function getName((e)=>{
    name = setNameValue(e => e.target.value);
    console.log(name);
})

function handleForm(e){
    e.preventDefault();
}

function Form(){
    const [nameValue,setNameValue] = useState(initialState)
    return(
        <form onSubmit={(e)=>{handleForm(e)}}  onClick={(e)=>getName(e)} method="post">
            <input type="text" name="name" placeholder="enter your name"/>
            <input type="submit" name="submit" value="Submit"/>
        </form>
    )
    
}

export default Form;