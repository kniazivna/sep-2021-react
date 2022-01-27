const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter1: state.counter1 + 1}
        case 'inc':
            return {...state,counter2: state.counter2 + 5}
        case 'increm':
            return {...state,counter3: state.counter3 + 10}
        case 'decrement':
            return {...state, counter1: state.counter1 - 1}
        case 'dec':
            return {...state, counter2: state.counter2 - 5}
        case 'decrem':
            return {...state, counter3: state.counter3 - 10}
        case 'reset':
            return {...state, counter1: 0}
        case 'res':
            return {...state, counter2: action.payload}
        case 'r':
            return {...state, counter3: action.payload}
        default:
            throw new Error('ERROR!!!')
    }
}

export default reducer;