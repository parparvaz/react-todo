import CONST from "../Helpers/Const";

export const createTask = value => ({
    type: CONST.createTask,
    payload: {
        value,
    }
})

export const setStatus = id => ({
    type: CONST.setStatus,
    payload: {
        id,
    }
})