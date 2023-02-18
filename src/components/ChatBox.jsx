import Message from "./Message";

const ChatBox = () => {
  //hardcode messages
  const messages = [
    {
      id: 1,
      text: "howdy there",
      name: "Holly"
    },
    {
      id: 2,
      text: "hey there",
      name: "Obi"
    }
  ]

  return (
  <div className='pb-44 pt-20 containerWrap'>
  {messages.map(message => (
    <Message key={message.id} message={message} />
  ))}
  </div>
)
}

export default ChatBox;
