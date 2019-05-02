// import axios from 'axios'
import config from '../../../config'
import {CHANGE_LIST} from './constants'
// import clientAxios from '../../../client/request'
// import serverAxios from '../../../server/request'

// action creator
const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => { // async
  // const request = server ? serverAxios : clientAxios
  return (dispatch, getState, axiosInstance) => { // axiosInstance： withExtraArgument 传递的参数
    // return promises result
    // return request
    //   // .get('http://47.95.113.63/ssr/api/news.json?secret=`${config.secret}`')
    //   // .get('http://47.95.113.63/ssr/api/news.json')
    //   .get('/api/news.json')
    //   .then((res) => {
    //     const list = res.data.data
    //     dispatch(changeList(list))
    //     // console.log(res.data.data, 'res.data')
    //   })
    return axiosInstance
      .get('/api/news.json')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}
