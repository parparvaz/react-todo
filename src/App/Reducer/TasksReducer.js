import CONST from "../Helpers/Const";

const initialState = []
let id = 0


export default (state = initialState, action) => {
    let date = new Date()
    switch (action.type) {
        case CONST.createTask:
            return [
                ...state,
                {
                    id: ++id,
                    value: action.payload.value,
                    date: getFullDate(date),
                    status: false
                }
            ]
        case CONST.setStatus:
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].status = !state[index].status
            return state
        default:
            return state
    }
}

const getFullDate = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} | ${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`