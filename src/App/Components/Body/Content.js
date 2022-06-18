import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";


const Content = ({allTasks,activeTab,activeTasks,deactivateTasks}) => {

    return (
        <div className="tab-content" id="ex1-content">
            <div className={'tab-pane fade ' + ((activeTab ==='tab-1') && ' show active')}>
                <ul className="list-group mb-0">
                    {allTasks && allTasks.map(task => (
                            <Task key={task.id} id={task.id} value={task.value} status={task.status}/>
                        )
                    )}
                </ul>
            </div>
            <div className={'tab-pane fade ' + ((activeTab ==='tab-2') && ' show active')}>
                <ul className="list-group mb-0">
                    {activeTasks && activeTasks.map(task => (
                            <Task key={task.id} id={task.id} value={task.value} status={task.status}/>
                        )
                    )}
                </ul>
            </div>
            <div className={'tab-pane fade ' + ((activeTab ==='tab-3') && ' show active')}>
                <ul className="list-group mb-0">
                    {deactivateTasks && deactivateTasks.map(task => (
                            <Task key={task.id} id={task.id} value={task.value} status={task.status}/>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    allTasks: state.TASKS,
    activeTasks: state.TASKS.filter(task => !task.status),
    deactivateTasks: state.TASKS.filter(task => task.status),
    activeTab: state.TAB,
})

export default connect(mapStateToProps)(Content);
