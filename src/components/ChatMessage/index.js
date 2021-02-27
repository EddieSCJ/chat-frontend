import './index.css';

const chatMessage = (props) => {
  return (
    <div>
      <div className={"username"}>
        {props.username}
      </div>
      <div className={`message-${props.sequence}`}>
        {props.message}
      </div>
    </div>
  )
}

export default chatMessage;