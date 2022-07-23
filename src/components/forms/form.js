import { useState } from "react";
function handleForm(e){
    e.preventDefault();
    setNameValue(e.target.value)
}
function Form(){
    const [nameValue,setNameValue] = useState(initialState)
    return(
        <form onSubmit={(e)=>{handleForm(e)}} method="post">
            <input type="text" name="name" placeholder="enter your name"/>
            <input type="submit" name="submit" value="Submit"/>
        </form>
    )
    
}

export default Form;