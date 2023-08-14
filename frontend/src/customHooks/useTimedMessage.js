import { useDispatch } from "react-redux";
import { setMessage, clearMessage } from "../features/message/messageSlice";
import { useCallback } from "react";

function useTimedMessage() {
  const dispatch = useDispatch();
  const addMessage = useCallback(insertMessage, [dispatch]);

  function insertMessage(data) {
    dispatch(setMessage(data));
    setTimeout(() => dispatch(clearMessage()), 7000);
  }

  return addMessage;
}

export default useTimedMessage;
