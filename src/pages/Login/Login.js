import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getIsAuthorized} from 'reducers/auth'
import {Layout, Input} from 'antd'

class Login extends Component {
  handleLoginClick() {
    console.log(this.emailComponent.refs.input.value)
    console.log(this.passwordComponent.refs.input.value)
  }

  render() {
    const {isAuthorized} = this.props
    if (isAuthorized) {
      return <Redirect to="/" />
    }
    return (
      <Layout>
        <Input ref={c => (this.emailComponent = c)} placeholder="email" />
        <Input ref={c => (this.passwordComponent = c)} placeholder="password" />
        <button onClick={this.handleLoginClick.bind(this)}>login</button>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
})
const mapDistachToProps = {}

export default connect(mapStateToProps, mapDistachToProps)(Login)
