const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return{...state, cart: []}
    }else if(action.type === 'CLEAR_CART_ITEM'){
        return{...state, cart: state.cart.filter((item) => item.id !== action.payload ) }
    }else if(action.type === 'INCREASE_AMT'){
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload){
                return{...item, amount: item.amount + 1 }
            }
            return item
        })
        return{...state, cart: tempCart}
    }else if(action.type === 'DECREASE_AMT'){
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload){
                return{...item, amount: item.amount - 1 }
            }
            return item
        }).filter((item) => item.amount !== 0)
        return{...state, cart: tempCart}
    }else if(action.type === 'NEW_TOTAL'){

        let {total, amount} = state.cart.reduce((newTotal, item) => {
            const {price, amount} = item
            newTotal.amount += amount
            const itemTotal = price * amount
            newTotal.total += itemTotal
            return newTotal
        }, {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2))

        return{...state, total, amount}
    }else if(action.type === 'LOADING'){
        return{...state, loading: true}
    }else if(action.type === 'DISPLAY_ITEMS'){
        return{...state, cart: action.payload,loading: false}
    }else if(action.type === 'TOGGLE_AMOUNT'){
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload.id ){
                if(action.payload.type === 'inc'){
                    return{...item, amount: item.amount + 1 }
                }else if(action.payload.type === 'dec'){
                    return{...item, amount: item.amount - 1 }
                }
            }
            return item
        }).filter((item) => item.amount !== 0 )
        return{...state, cart: tempCart}
    }
    throw new Error('No matching action type')
}

export default reducer