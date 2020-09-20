import React from "react";
import "../Dialogs.css";
import {sendMessageCreator, updateMessageCreator} from "../../../redux/Dialogs-reducer";
import Chat from "./Chat";
import StoreContext from "../../../StoreContex";

const ChatContainer = (props) => {

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

export default ChatContainer;