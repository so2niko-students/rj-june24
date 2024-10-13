import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../reducers/counter_reducer';

const defaultCounterValue = {
    value : 0
};

export const counterStore = configureStore({
    reducer : counterReducer,
    // preloadedState : defaultCounterValue,
});
//https://redux-toolkit.js.org/api/configureStore
//counterStore = createStore(counterReducer, defaultCounterValue);