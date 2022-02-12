import './Message.scss';

function Message(msg) {
    return (
      <div className="messageBlock">
         <span className='message'>{msg.myMessage} </span> 
      </div>
    );
  }

  export default Message;