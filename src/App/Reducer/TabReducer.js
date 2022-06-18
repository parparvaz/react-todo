import CONST from "../Helpers/Const";

const initialState = 'tab-1'

export default (state = initialState, action) => {
    switch (action.type) {
        case CONST.selectTab:
            return action.payload.tab

        default:
            return state
    }
}
