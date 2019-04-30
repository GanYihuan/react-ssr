import axios from 'axios'
import config from '../../../config'

// action creator
const changeList = (list) => ({
  type: 'change_home_list',
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios
      // .get('http://47.95.113.63/ssr/api/news.json?secret=a3c9fe0782107295ee9f1709edd15218')
      .get('http://47.95.113.63/ssr/api/news.json?secret=`${config.secret}`')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
        console.log(res.data, 'res.data')
      })
  }
}
