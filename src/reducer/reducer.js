import { ADD_ITEM, GRAB_DATA } from "../actions";

const reducer= (state, action) => {
if (action.type === GRAB_DATA) {
    console.log();
    return {
        ...state,
        data: action.payload
    } 
}

if (action.type === ADD_ITEM) {
    console.log(action.payload);
    return {
        ...state,
        data: [action.payload.newItem, ...state.data]
    } 
}
// return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer;