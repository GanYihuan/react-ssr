import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => { // async
  return (dispatch, getState, axiosInstance) => { // axiosInstance： withExtraArgument 传递的参数
    return axiosInstance
      .get('/api/translations.json')
      .then((res) => {
        if (res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        } else {
          const list = []
          dispatch(changeList(list))
        }
        console.log(res.data)
      })
  }
}
