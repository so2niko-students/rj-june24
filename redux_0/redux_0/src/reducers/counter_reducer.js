const defaultCounterValue = {
    value : 0
};

//state = { value : number }
//action = { type : string, value : any }
//return { value : number }
export const counterReducer = (state = defaultCounterValue, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { value: state.value + 1 };
        case 'counter/decrement':
            return { value: state.value - 1 };
        case 'counter/setnull':
            return { value: 0 };
        case 'counter/setnew':
            return { value: action.payload.value };
        default:
            return state;
    }
}