import { ADD_ITEM, GRAB_DATA, CHOOSE_URL, SHOW_MORE, CLOSE_WINDOW } from "./actions";

const reducer = (state, action) => {
    if (action.type === GRAB_DATA) {
        return {
            ...state,
            data: action.payload
        }
    }

    if (action.type === ADD_ITEM) {
        return {
            ...state,
            data: [action.payload.newItem, ...state.data]
        }
    }

    if (action.type === CHOOSE_URL) {
        return {
            ...state,
            url: `http://www.filltext.com/?rows=${action.payload.amount}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
        }
    }

    if (action.type === SHOW_MORE) {
        return {
            ...state,
            user: state.data.find(u => u.phone === action.payload.id)
        }
    }

    if (action.type === CLOSE_WINDOW) {
        return {
            ...state,
            user: ''
        }
    }
    // return state
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer;