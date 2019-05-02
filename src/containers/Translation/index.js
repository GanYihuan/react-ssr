import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' // 限于客户端重定向
import Header from '../../components/Header'
import { getTranslationList } from './store/actions'
import styles from './style.css'
import withStyle from './../../WithStyle'

class Translation extends Component {
  render() {
    return this.props.login
      ?
      <div className={styles.test}>
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

// Translation.loadData = (store) => {
//   return store.dispatch(getTranslationList())
// }

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispathToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

// loadData 潜在问题修复
const ExportTranslation = connect(mapStateToProps, mapDispathToProps)(withStyle(Translation, styles))
ExportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

// export default connect(
//   mapStateToProps,
//   mapDispathToProps
// )(Translation)

export default ExportTranslation
