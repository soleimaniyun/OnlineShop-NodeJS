import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {

    websiteTitle: '',
    websiteEmailAddress: '',
    count: 0,
    token: '',
    lastUpdate: Date.now(),

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SITE_INFO':
            return {
                ...state,
                websiteTitle: action.websiteTitle,
                websiteEmailAddress: !!action.websiteEmailAddress,
            }
        case 'TOKEN' :
            return {
                ...state,
                token: action.token,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'RESET':
            return {
                ...state,
                count: initialState.count,
            }
        default:
            return state
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
