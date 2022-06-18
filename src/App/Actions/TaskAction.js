import Const from "../Helpers/Const";
export const setTask = value => ({
    type: Const.setTask,
    payload: {
        value
    }
})
export const emptyTask = () => ({
    type: Const.emptyTask,
    payload: {
        value:''
    }
})