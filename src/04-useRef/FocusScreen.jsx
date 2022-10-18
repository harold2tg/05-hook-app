import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();
    const onClickBtn = () =>{
        console.log(inputRef);
        inputRef.current.select();
    }
  return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input type="text" 
           ref={inputRef}
           className="form-control"
           placeholder="Ingrese su nombre"
     />
     <button className="btn btn-primary mt-2"
              onClick={onClickBtn}>
        Set focus
     </button>
    </>
  )
}
