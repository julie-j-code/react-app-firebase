import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import React from "react";
import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import Message from "./Message";




const style = {
    main: `flex flex-col p-[10px]`,
};

const Chat = () => {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    // every time a page, component reload, with database changes
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let messages = [];
          querySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(messages);
        });
        return () => unsubscribe();
      }, []);


  return (
    <>
    <main className={style.main}>
      {messages &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
    </main>
    {/* Send Message Compoenent */}

  </>
  );
};

export default Chat;
