import React from 'react';
import {auth} from '../firebase'

const style = {
  message: `flex items-center shadow-xl my-6 py-3 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-5rem] text-gray-600 text-sm`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end text-sm float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black text-sm float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;