import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  sideBar : false
})


export { getGlobalState, useGlobalState, setGlobalState }