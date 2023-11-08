import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  isLogged : false,
  sideBar : false,
  Auth : 'Buyer',
  categories : [],
  brands : [],
  user : {},
  notification : {},
  gallery : {},
  categoryId : null,
  attributes : [],
  colors : [],
  size : [],
  gender : []
})

export { getGlobalState, useGlobalState, setGlobalState }