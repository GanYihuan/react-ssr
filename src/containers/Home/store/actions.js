import axios from 'axios'
import config from '../../../config'
import {CHANGE_LIST} from './constants'

// action creator
const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => { // async
  let url = ''
  if (server) {
    url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE'
  } else {
    url = '/api/news.json?secret=PP87ANTIPIRATE'
  }
  return (dispatch) => {
    // return promises result
    return axios
      // .get('http://47.95.113.63/ssr/api/news.json?secret=`${config.secret}`')
      // .get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
      .get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
        // console.log(res.data.data, 'res.data')
      })
  }
}
