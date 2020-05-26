import React from 'react';
import { connect } from "react-redux";

import { hideNotification } from "../../redux/elements/actions";

import "./notification.scss";

const notification = ({hideNotification}) => {
    return (
        <div className='notification'>
            <div className='header'>
                <div className='title'>
                    Notifications
                </div>
                <div className='close' onClick={hideNotification}>
                    <span className='pointer'>X</span>
                </div>
            </div>
            <div className='body'>
                Body
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    hideNotification: () => dispatch(hideNotification())
})
export default connect(null, mapDispatchToProps)(notification);
