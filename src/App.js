import React, {useState} from 'react';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {

    //add car
   const [item, setItem] = useState(null);
   // //delete
    const [elem, setElem] =useState(null);

    const remover = (car) => {
      setElem(car);
    }

   const update = (info) => {
       setItem(info);
    }

  return (
      <div>
          <Form update={update}/>
          <Cars item={item} remover={remover} elem={elem}/>
      </div>
  );
};

export default App;
