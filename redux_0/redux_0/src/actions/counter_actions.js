export const ActionCounterIncrement = () => {
    return { type : 'counter/increment' };
}

export const ActionCounterSetNull = () => {
    return { type: 'counter/setnull' };
}

export const ActionCounterSetNew = (value = 0) => {
    return { type: 'counter/setnew', payload : { value }};
}