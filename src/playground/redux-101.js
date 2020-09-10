import { createStore } from 'redux'

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({ setNumber = 10 } = {}) => ({
    type: 'SET',
    setNumber: setNumber
})

const resetCount = () => ({
    type: 'RESET',
})

// Reducers
// 1. Reducers are pure functions (don't use global scope variables)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setNumber
            }
        default:
            return state
    }
}

const store = createStore (countReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(decrementCount({decrementBy: 3}))

store.dispatch(resetCount())

store.dispatch(setCount({setNumber: 5}))
