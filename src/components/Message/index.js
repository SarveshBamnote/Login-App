import './index.css'

const Message = props => {
  const {isLogin} = props
  const message = isLogin ? 'Please Login' : 'Welcome User'

  return <h1 className="message">{message}</h1>
}

export default Message
