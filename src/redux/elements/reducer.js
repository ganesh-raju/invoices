import elementTypes from "./types";
const INITIAL_STATE = {
    hide_new_modal: true,
    hide_notification_modal: true
}

const elemtsReducer = function(state=INITIAL_STATE, action){
    switch(action.type){
        case elementTypes.SHOW_FORM :
            return{
                ...state,
                hide_new_modal: !state.hide_new_modal
            }
        case elementTypes.SHOW_NOTIFICATIONS:
            return{
                ...state,
                hide_notification_modal: !state.hide_notification_modal
            }
        default:
            return state
    }
}

export default elemtsReducer;