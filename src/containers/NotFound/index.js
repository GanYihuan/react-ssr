import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return <div>404</div>
  }
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }
}

export default NotFound
