import {connect} from "react-redux";
import {setTask, emptyTask} from "../../Actions/TaskAction";
import {createTask} from "../../Actions/TasksAction";

const Form = ({setTask, task,createTask,emptyTask}) => {
    const setInput = e => setTask(e.target.value)
    const createTasks = () => {
        createTask(task)
        emptyTask()
    }

    return (
        <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input value={task} onChange={setInput} id="form2" className="form-control"/>
                <label className="form-label" htmlFor="form2">New task...</label>
            </div>
            <button onClick={createTasks} className="btn btn-info ms-2">Add</button>
        </div>
    );
};

const mapStateToProps = state => ({
    task: state.TASK.value,
})

export default connect(mapStateToProps,{
    setTask,
    createTask,
    emptyTask
})(Form);
