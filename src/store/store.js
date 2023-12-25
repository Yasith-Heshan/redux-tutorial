import {createStore} from 'redux';

const initialState  = {
    number : 0
}

export const numberActionTypes = {
    INC: 'increment',
    DEC: 'decrement',
}

export const numberIncrement = (payload=1)=>(
    {
        type:numberActionTypes.INC,
        payload
    }
)

export const numberDecrement = (payload=1)=>(
    {
        type:numberActionTypes.DEC,
        payload
    }
)
const reducer = (state=initialState, action)=>{
    if(action.type === numberActionTypes.INC){
        return {number: state.number + action.payload};
    }
    if(action.type === numberActionTypes.DEC){
        return {number: state.number - action.payload};
    }

    return state;
}

const store = createStore(reducer);

export default store;