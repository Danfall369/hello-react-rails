import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../redux/messages/messagesSlice";

function Message() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.messages);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  return <h3>{message.content}</h3>;
}
export default Message;
