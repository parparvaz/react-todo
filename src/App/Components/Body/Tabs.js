import React from 'react';
import {connect} from "react-redux";
import {selectTab} from "../../Actions/TabAction";


const Tabs = ({activeTab,selectTab}) => {
    const changeTab = tab => {
        selectTab(tab.target.getAttribute('data-target'))
    }
    return (
        <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
            <li onClick={changeTab} className="nav-item" >
                <a className={'nav-link ' + ((activeTab ==='tab-1') && ' active')} data-target="tab-1">All</a>
            </li>
            <li onClick={changeTab} className="nav-item" >
                <a className={'nav-link ' + ((activeTab ==='tab-2') && ' active')} data-target="tab-2">Active</a>
            </li>
            <li onClick={changeTab} className="nav-item" >
                <a className={'nav-link ' + ((activeTab ==='tab-3') && ' active')} data-target="tab-3">Completed</a>
            </li>
        </ul>
    );
};

const mapStateToProp = state => ({
    activeTab : state.TAB
})

export default connect(mapStateToProp,{
    selectTab
})(Tabs);
