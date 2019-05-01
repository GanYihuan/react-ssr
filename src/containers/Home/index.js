import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import {getHomeList} from './store/actions'

class Home extends Component {
  render() {
    // console.log(this.props.list, 'constructor this.props.list')
    return (
      <div>
        <Header/>
        <div>Home, {this.props.name}</div>
        {this.getList()}
        <button onClick={() => {alert('click1')}}>click</button>
      </div>
    )
  }
  componentDidMount() { // 只在客户端渲染
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
  getList() {
    const {list} = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
}

// const Home = (props) => {
//   return (
//     <div>
//       <Header/>
//       <div>Home, {props.name}</div>
//       <button onClick={() => {alert('click1')}}>click</button>
//     </div>
//   )
// }

// 服务器端渲染前把这个路由需要的数据提前加载好
Home.loadData = (store) => {
  return store.dispatch(getHomeList()) // return promises result, because getHomeList() return promise result
}

const mapStateToProps = state => ({
  list: state.home.newList,
  name: state.home.name
})

const mapDispathToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home)
