import React from 'react';
import {connect} from "react-redux";
import Form from "../../re-usable/form";


import { hideNewPage } from "../../../redux/elements/actions";

import "./new.scss";

const New = ({hideNewPage}) => {
    return (
        <div className='new'>
            <div className='header'>
                <div className='modal_title'>
                    New Invoice
                </div>
                <div className='close_modal'>
                    <span onClick={hideNewPage} className='pointer'>
                        X
                    </span>
                </div>
            </div>
            <div className='body'>
                <form>
                    <Form type='text' name='username' label='User name' required />
                    
                    <Form type='number' name='amount' label='Amount' required />
                    <Form type='text' name='organization' label='Orgnization' required />
                    <Form type='date' name='due-date' label='' required />
                    <Form type='text' name='status' label='Payment status' required />
                </form>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    hideNewPage: () => dispatch(hideNewPage())
})

export default connect(null, mapDispatchToProps)(New);