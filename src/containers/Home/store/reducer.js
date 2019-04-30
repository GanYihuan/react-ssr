const defaultState = {
  name: 'GanEhank',
  newList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_list':
      return {
        ...state,
        newList: action.list
      }
    default:
      return state
  }
}
