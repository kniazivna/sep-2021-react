import {useReducer, useRef} from "react";

import './App.module.css';
import Dog from "./components/Dog/Dog";
import Cat from "./components/Cat/Cat";

const reducer = (state, action) => {

    switch (action.type) {

        case 'add':

            if (action.target === 'cat') {
                return {...state, cat: [...state.cat, action.data.catWithId]}
            }
            else if (action.target === 'dog') {
                return {...state, dog: [...state.dog, action.data.dogWithId]}
            }
            break;

        case 'remove':
            if (action.target === 'cat') {
                return {...state, cat: state.cat.filter(catWithId => catWithId.id !== action.data.id)}
            }
            else if(action.target === 'dog') {
                return {...state, dog: state.dog.filter(dogWithId => dogWithId.id !== action.data.id)}
            }
            break;

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cat: [], dog: []});

    const catRef = useRef();
    const dogRef = useRef();

    const catCreator = (e) => {
        e.preventDefault();
        const cat = catRef.current.value;
        const catWithId = {
            id: Date.now(),
            cat
        }
        dispatch({type: 'add', target: 'cat', data: {catWithId}})
        catRef.current.value = '';
    }

    const dogCreator = (e) => {
        e.preventDefault();
        const dog = dogRef.current.value;
        const dogWithId = {
            id: Date.now(),
            dog
        }
        dispatch({type: 'add', target: 'dog', data: {dogWithId}})
        dogRef.current.value = '';
    }

    const catRemover = (id) => {
        dispatch({type: 'remove', target: 'cat', data: {id}})
    }

    const dogRemover = (id) => {
        dispatch({type: 'remove', target: 'dog', data: {id}})
    }

    return (
        <>
            <form>
                <label>Add cat: <input type="text" name={'cat'} ref={catRef}/></label>
                <button onClick={catCreator}>Save</button>
                <label>Add dog: <input type="text" name={'dog'} ref={dogRef}/></label>
                <button onClick={dogCreator}>Save</button>
            </form>

            <div>
                <div className={'animals'}>
                    <Cat cats={state.cat} catRemover={catRemover}/>
                    <Dog dogs={state.dog} dogRemover={dogRemover}/>
                </div>
            </div>
        </>
    );

}

export default App;
