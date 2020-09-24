import React from "react";
import "../Dialogs.css";
import {sendMessageCreator, updateMessageCreator} from "../../../redux/Dialogs-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

/* const ChatContainer = (props) => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage

            let sendMessage = () => {
                store.dispatch(sendMessageCreator());
            }

            let onMessageChange = (newText) => {
                let action = updateMessageCreator(newText);
                store.dispatch(action);
            }
            return (<Chat updateMessageCreator={onMessageChange}
                          sendMessageCreator={sendMessage}
                          newMessage={state.newMessage}
                          messages={state.messagesData}/>)
        }
    }
    </StoreContext.Consumer>;
}
*/

let mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessage,
        messages: state.dialogsPage.messagesData
    }
}

const ChatContainer = connect(mapStateToProps, {updateMessageCreator, sendMessageCreator}) (Chat)

export default ChatContainer;