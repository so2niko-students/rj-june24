import React, { useState } from 'react';
import { counterStore } from './stores/counter_store';
import { ActionCounterIncrement, ActionCounterSetNew, ActionCounterSetNull } from './actions/counter_actions';

// store.subscribe((val) => console.log('val', val, 'store', store.getState()));

export const ReduxIntro = () => {
    const [count, setCounter] = useState(0);

    counterStore.subscribe(() => {
        const c = counterStore.getState();
        setCounter(c.value);
    });

    const onClickAdd = () => {
        counterStore.dispatch(ActionCounterIncrement());
    };

    const onClickNull = () => {
        counterStore.dispatch(ActionCounterSetNull());
    };

    const onClickRandom = () => {
        const r = ~~(Math.random() * 1000);
        counterStore.dispatch(ActionCounterSetNew(r));
    }

    return (
            <p>
                <span>{count}</span>
                <button onClick={onClickAdd}>Add</button>
                <button onClick={onClickNull}>Null</button>
                <button onClick={onClickRandom}>Random</button>
            </p>
    );
}