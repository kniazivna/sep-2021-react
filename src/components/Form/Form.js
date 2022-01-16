// import React, {useState} from 'react';
//
// const Form = ({getFiltered}) => {
//
//     const [form, setForm] = useState({name: '', username: '', email: ''});
//
//     const formHandler = (event) => {
//         const info = {...form, [event.target.name]: event.target.value}
//         setForm({...info});
//     }
//
//     const find = (event) => {
//         event.preventDefault();
//         getFiltered(form);
//     }
//
//     return (
//         <form>
//             <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
//             <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
//             <label>Email: <input type="text" name={'email'} value={form.age} onChange={formHandler}/></label>
//             <button onClick={find}>Find</button>
//         </form>
//     );
// };
//
// export default Form;

// тут ще зробила за допомогою useForm

import {useForm} from "react-hook-form";

const Form = ({getFiltered}) => {

    const {register, handleSubmit} = useForm();


    const find = (input) => {
        //console.log(input);
        getFiltered(input);
    }

    return (
        <form>
            <label>Name: <input type="text" defaultValue={''} {...register('name')}/></label>
            <label>Username: <input type="text" defaultValue={''} {...register('username')}/></label>
            <label>Email: <input type="text" defaultValue={''} {...register('email')}/></label>
            <button onClick={handleSubmit(find)}>Find</button>
        </form>
    );
};

export default Form;




