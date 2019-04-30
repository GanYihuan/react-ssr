import React, {Component} from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
// import { dispatch } from 'rxjs/internal/observable/range';
import {getHomeList} from './store/actions'

class Home extends Component {
  render() {
    console.log(this.props.list)
    return (
      <div>
        <Header/>
        <div>Home, {this.props.name}</div>
        {/* {
          this.props.list.map((item) => {
            return <div key={item.id}>{item.title}</div>
          })
        } */}
        <button onClick={() => {alert('click1')}}>click</button>
      </div>
    )
  }
  componentDidMount() {
    this.props.getHomeList()
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

const mapStateToProps = state => ({
  list: state.home.newList,
  name: state.home.name
})

const mapDispathToProps = dispatch => ({
  getHomeList() {
    console.log('getHomeList')
    dispatch(getHomeList())
  }
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home)
