import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home,User,Auth,Account } from './components'


import './styles/base.scss'




const App = () => {
    const router = createBrowserRouter([
      {  
        path : '/',
        element : <Home />
      },
      {  
        path : '/user/buyer',
        element : <User auth="buyer"/>
      },
      {  
        path : '/user/seller',
        element : <User auth="seller"/>
      },

      {  
        path : '/auth/login',
        element : <Auth auth="buyer"/>
      },
      {  
        path : '/auth/seller',
        element : <Auth auth="seller"/>
      },
      {  
        path : '/forgotPassword',
        element : <Account auth="forget"/>
      }

    ])
  return (
    <>
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
    </>
  )
}

export default App