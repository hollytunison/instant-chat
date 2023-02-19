import Message from './Message';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";

const ChatBox = () => {
	//hardcode messages
  const [messages, setMessages] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'messages'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id});
			});
      setMessages(messages);
		});

    return () => unsubscribe;
	}, []);

	return (
		<div className='pb-44 pt-20 containerWrap'>
			{messages.map((message) => (
				<Message key={message.id} message={message} />
			))}
		</div>
	);
};

export default ChatBox;
