import React from 'react';
import {connect} from "react-redux";

import {setStatus} from "../../Actions/TasksAction";

const Task = ({id, value, status, setStatus,task}) => {
    const setTaskStatus = () => setStatus(id)
    console.log(task);
    return (
        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style={{backgroundColor: '#f4f6f7'}}>
            <input className="form-check-input me-2" type="checkbox" id={value + id} onClick={setTaskStatus}/>
            <label htmlFor={value + id}> {status ? (<s>{value}</s>) : (value)} </label>
        </li>
    );
};

const mapStateToProps = state => ({
    task: state.TASKS
})

export default connect(mapStateToProps, {
    setStatus
})(Task);
