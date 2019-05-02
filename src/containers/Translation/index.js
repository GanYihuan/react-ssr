import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import { getTranslationList } from './store/actions'

class Translation extends Component {
  render() {
    return this.props.login
      ?
      <div>
        {this.getList()}
      </div>
      :
      <Redirect to='/' />
  }
  componentDidMount() { // 只在客户端渲染
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }
  getList() {
    const {list} = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispathToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Translation)
