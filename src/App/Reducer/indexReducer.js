import {combineReducers} from "redux";
import TaskReducer from "./TaskReducer";
import TasksReducer from "./TasksReducer";
import TabReducer from "./TabReducer";

export default combineReducers({
    TASK: TaskReducer,
    TASKS: TasksReducer,
    TAB: TabReducer
})