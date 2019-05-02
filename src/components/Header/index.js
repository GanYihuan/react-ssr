import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    console.log(login)
    return (
      <div>
        <Link to='/'>首页</Link>
        <br />
        {
          login
            ?
            <Fragment>
              <Link to='/translation'>翻译列表</Link>
              <br />
              <div onClick={handleLogout}>退出</div>
            </Fragment>
            :
            <div onClick={handleLogin}>登录</div>
        }
      </div>
    )
  }
}

// const Header = (props) => {
//   return (
//     <div>
//       <Link to='/'>首页</Link>
//       <br/>
//       {
//         props.login
//           ?
//           <Fragment>
//             <Link to='/login'>翻译列表</Link>
//             <Link to='/login'>Logout</Link>
//           </Fragment>
//           :
//           <Link to='/login'>Login</Link>
//       }
//     </div>
//   )
// }

const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(
  mapState,
  mapDispatch
)(Header)
