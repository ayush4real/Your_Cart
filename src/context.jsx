import React, { useReducer, useContext, useEffect } from 'react';
import cartItems from './data.js'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const clearItem = (id) => {
        dispatch({type: 'CLEAR_CART_ITEM', payload: id})
    }

    const increaseAmt = (id) => {
        dispatch({type: 'INCREASE_AMT', payload: id})
    }

    const decreaseAmt = (id) => {
        dispatch({type: 'DECREASE_AMT', payload: id})
    }

    const toggleAmt = (id, type) => {
        dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
    }

    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        const response = await fetch(url);
        const cart = await response.json()
        dispatch({type: 'DISPLAY_ITEMS', payload: cart})
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({type: 'NEW_TOTAL'})
    }, [state.cart])

    return(
        <AppContext.Provider
           value={
               {
                   ...state,
                   clearCart,
                   clearItem,
                   increaseAmt,
                   decreaseAmt,
                   toggleAmt
               }
           } >
               {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}