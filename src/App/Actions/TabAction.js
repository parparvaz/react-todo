import CONST from "../Helpers/Const";


export const selectTab = tab => ({
    type: CONST.selectTab,
    payload: {
        tab
    }
})