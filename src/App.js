import {useReducer, useRef} from "react";

import './App.css';

const reducer = (state, action) => {

    switch (action.type) {

        case 'add':
            if (action.target === 'cat') {
                return {...state, cat: [...state.cat, action.data]}
            } else if (action.target === 'dog') {
                return {...state, dog: [...state.dog, action.data]}
            }
            break;

        case 'delete':
            if (action.target === 'dog') {
                return {...state, dog: [...state.dog, action.data]}
            }
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cat: [], dog: []});

    const catRef = useRef();
    const dogRef = useRef();

    const catCreator = (e) => {
        e.preventDefault();
        const cat = catRef.current.value;
        dispatch({type: 'add', target: 'cat', data: cat})
    }

    const dogCreator = (e) => {
        e.preventDefault();
        const dog = dogRef.current.value;
        dispatch({type: 'add', target: 'dog', data: dog})
    }

    // const catRemover = (e) => {
    //     e.preventDefault();
    //     const cat = document.getElementById().innerHTML = '';
    //     // cat.classList.add('hidden');
    //     dispatch({type: 'delete', target: 'cat', data: cat})
    // }

    const dogRemover = (e) => {
        e.preventDefault();
        const dog = document.getElementById().classList.toggle('hidden');

        // dog.classList.toggle('hidden');
        dispatch({type: 'delete', target: 'dog', data: dog})
    }

    return (
        <>
            <form>
                <label>Add cat: <input type="text" name={'cat'} ref={catRef}/></label>
                <button onClick={catCreator}>Save</button>
                <label>Add dog: <input type="text" name={'dog'} ref={dogRef}/></label>
                <button onClick={dogCreator}>Save</button>
            </form>

            <div className={'block'}>
                <div className={'animals'}>
                    {/*{(state.cat).map(value => <div className={'cat'} key={(state.cat).indexOf(value)}*/}
                    {/*                               id={(state.cat).indexOf(value)}>*/}
                    {/*    <p>{value}</p>*/}
                    {/*    <button>Delete</button>*/}
                    {/*</div>)}*/}
                </div>
                <div className={'animals'}>
                    {(state.dog).map(value => <div className={'dog'} key={(state.dog).indexOf(value)}
                                                   id={(state.dog).indexOf(value)}>
                        <p>{value}</p>
                        <button onClick={dogRemover}>Delete</button>
                    </div>)}
                </div>
            </div>
        </>
    );

}

export default App;
