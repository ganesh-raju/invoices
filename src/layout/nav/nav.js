import React from 'react'
import { FaRegBell, FaAtom, FaPlus, FaUser, FaAngleDown } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";


import { hideNewPage, hideNotification } from "../../redux/elements/actions";

import Notification from "../../app/notification/notification";
import New from "../../app/invoices/new/new";
import "./nav.scss";

const nav = ({history, hiddenNewPage, hideNewPage, hideNotification, hiddenNotifications}) => {
    const path = history.location.pathname;
    return (
        <nav>
           <div className='header'>
                <h3><Link to='/'><FaAtom size='2em' /></Link></h3>
           </div> 
           <div className='middle_items'>
                <ul>
                    <li><Link to='/' className={`${path === '/'? 'active' : ''}`}>Main</Link></li>
                    <li><Link to='/invoices' className={`${path === '/invoices'? 'active' : ''}`}>Invoices</Link></li>
                    <li><Link to='/clients' className={`${path === '/clients'? 'active' : ''}`}>Clients</Link></li>
                </ul>
           </div>
           <div className='right_items'>
                <ul>
                    <li onClick={hideNewPage}><span className='white_bg_button pointer'><FaPlus size='0.8em' />  New Invoice</span></li>
                    <li onClick={hideNotification} className='pointer'><span className='notifications'><FaRegBell /></span></li>
                    <li><span className='pointer'><FaUser /> <FaAngleDown /></span></li>
                </ul>
           </div>
           {
            hiddenNotifications ? null :  <Notification pose={hiddenNotifications ? 'open' : 'closed' } />
           }
          
           {
            hiddenNewPage ? null : <New />
           }
           
        </nav>
    )
};

const mapStateToProps = state => {
    return {
        hiddenNewPage: state.elements.hide_new_modal,
        hiddenNotifications: state.elements.hide_notification_modal

    }
}

const mapDispatchToProps = dispatch => ({
    hideNewPage: () => dispatch(hideNewPage()),
    hideNotification: () => dispatch(hideNotification())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(nav));
