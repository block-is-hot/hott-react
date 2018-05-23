import React from 'react'

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      error: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
    // this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    let { username, email, password } = this.state
    // this.props.handleComplete({ username: username, email: email, password: password })
    this.props.onComplete({ username, email, password })
    .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.state.error ?
            <div>
              <p>{this.state.error.message}</p>
            </div>
            :
            undefined
          }
          <div class="form-input">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}/>
          </div>

              {this.props.buttonText === 'signup' ?
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="scott.schmidt@aol.com"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                </div>
                :
                undefined
              }

          <div>
            <input
              type="password"
              name="password"
              placeholder="codefellows401"
              value={this.state.password}
              onChange={this.handleChange}/>
          </div>
          <button type="submit" value="sign-in" class="btn-login">
          {this.props.buttonText}</button>
          <button type="submit" value="sign-up" class="btn-login">
          {this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}