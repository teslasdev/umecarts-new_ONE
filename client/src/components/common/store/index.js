import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  sideBar : false,
  Auth : 'Buyer'
})


export { getGlobalState, useGlobalState, setGlobalState }