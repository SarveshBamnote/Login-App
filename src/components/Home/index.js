import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: true}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Login login={this.onLogin} />
          ) : (
            <Logout logout={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
