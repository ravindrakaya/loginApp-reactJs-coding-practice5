// Write your code here
import {Component} from 'react'

import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEl
    let btnEl

    if (isLogin) {
      messageEl = <Message content="Welcome User" />
      btnEl = <Login changeStatus={this.changeStatus} />
    } else {
      messageEl = <Message content="Please Login" />
      btnEl = <Logout changeStatus={this.changeStatus} />
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          {messageEl}
          {btnEl}
        </div>
      </div>
    )
  }
}
export default Home
