import { useState } from 'react'

function handleForm(e) {
    e.preventDefault();
}


function Form() {

    const [name, setName] = useState(name => "")

    function getName(){
        console.log(name)
    }

    return (
        <form onSubmit={(e) => { handleForm(e) }} method="post">
            <input type="text" value={name} name="name" placeholder="enter your name" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="submit" name="submit" value="Submit" onClick={getName} />
        </form>
    )

}

export default Form;