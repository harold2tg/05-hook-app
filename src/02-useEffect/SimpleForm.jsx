import { useState } from "react";
export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'harold',
    email:'harold@gmail.com'

  })

  const {username, email }  = formState;

  const onInputChange = (event) =>  {
    console.log(event.target.value)

  }

  return (
    <>
    <h1>Formulario Simple</h1>
    <hr />
    <input type="text"
           className="form-control"
           placeholder="Username"
           name="username"
           value={username}
           onChange={onInputChange}
           />
    <input type="text"
           className="form-control mt-2"
           placeholder="alguien@alguien.com"
           name="email"
           value={email}
           onChange={onInputChange}
           />           

           
    </>
    

  )
}
