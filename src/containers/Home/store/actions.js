import axios from 'axios'

export const getHomeList = () => {
  return () => {
    axios
      .get('http://47.95.113.63/ssr/api/news.json?secret=a3c9fe0782107295ee9f1709edd15218')
      .then((res) => {
        console.log(res)
      })
  }
}
