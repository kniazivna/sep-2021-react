import React, {useState} from 'react';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {

    //add car
   const [item, setItem] = useState(null);



  return (
      <div>
          <Form update={setItem}/>
          <Cars item={item} update={setItem}/>
      </div>
  );
};

export default App;
