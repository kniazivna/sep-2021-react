import React, {useState} from 'react';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

const App = () => {

    //add car
   const [item, setItem] = useState(null);

   const update = (info) => {
       setItem(info);
    }

  return (
      <div>
          <Form update={update}/>
          { item && <Cars item={item} update={update}/>}
      </div>
  );
};

export default App;
