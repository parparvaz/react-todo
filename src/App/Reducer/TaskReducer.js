import CONST from "../Helpers/Const";

const initialState = {
    value: ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case CONST.setTask:
            return {
                ...state,
                value: action.payload.value
            }
        case CONST.emptyTask:
            return {
                ...state,
                value: action.payload.value
            }
        default:
            return state
    }
}