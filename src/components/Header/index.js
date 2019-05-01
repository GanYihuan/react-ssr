import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div>
      <Link to='/'>首页</Link>
      <br/>
      {
        props.login
          ?
          <Fragment>
            <Link to='/login'>翻译列表</Link>
            <Link to='/login'>Logout</Link>
          </Fragment>
          :
          <Link to='/login'>Login</Link>
      }
    </div>
  )
}

const mapState = (state) => ({
  login: state.header.login
})

export default connect(mapState, null)(Header)
