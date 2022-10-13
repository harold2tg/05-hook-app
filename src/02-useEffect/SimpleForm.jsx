import { useEffect, useState } from "react";
export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'harold',
    email:'harold@gmail.com'

  })

  const {username, email }  = formState;

  const onInputChange = ({target}) =>  {

    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ] : value,
    })

  }

  useEffect( () => {
    console.log('llamando el useEffect');
  }, [] );

  useEffect( () => {
    console.log('changed formState');
  }, [formState] );

  useEffect( () => {
    console.log('changed email');
  }, [email] );
  
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
