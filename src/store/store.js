import {createStore} from 'redux';

const initialState  = {
    number : 0
}
const reducer = (state=initialState, action)=>{
    if(action.type === 'inc'){
        return {number: state.number + 1};
    }
    if(action.type === 'dec'){
        return {number: state.number - 1};
    }
    if(action.type === 'inc_by_number'){
        return {number: state.number + action.payload};
    }
    if(action.type === 'dec_by_number'){
        return {number: state.number - action.payload};
    }
    return state;
}

const store = createStore(reducer);

export default store;