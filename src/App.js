import {useReducer} from "react";

import './App.css';
import {useForm} from "react-hook-form";

const reducer = (state, action) => {
  switch (action.type){
    case 'add':
      return{...state, cat: state.cat}
    case 'delete':
      return{...state, cat: state.cat}
    default:
      throw new Error('ERROR!!!')
  }
}

function App() {
  const [state,dispatch] = useReducer(reducer, {cat:0,dog:0} );

  const {handleSubmit,register} = useForm();

  const add = () =>{

  }
  return (
    <>
        <form>
            <label>Add cat: <input type="text" defaultValue={''}{...register('cat')}/></label>
            <button onClick={handleSubmit(add)}>Save</button>
            <label>Add dog: <input type="text" defaultValue={''}{...register('dog')}/></label>
            <button onClick={handleSubmit(add)}>Save</button>
        </form>
    </>
  );
}

export default App;
