import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home,User,Auth,Account, Product } from './components'


import './styles/base.scss'
import AOS from 'aos'
import CartController from './components/Page-controller/Cart-controller'
import CheckoutController from './components/Page-controller/Checkout-controller'
import DeliveryController from './components/Page-controller/Delivery-controller'
import PaymentController from './components/Page-controller/Payment-controller'
import CompletionController from './components/Page-controller/Completion-controller'




const App = () => {
    AOS.init();
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
      },
      {  
        path : '/product/:id',
        element : <Product/>
      },
      {  
        path : '/cart',
        element : <CartController />
      },
      {  
        path : '/checkout',
        element : <CheckoutController />
      },
      {  
        path : '/checkout/delivery_info',
        element : <DeliveryController/>
      },
      {  
        path : '/checkout/payment_info',
        element : <PaymentController />
      },
      {  
        path : '/checkout/completion',
        element : <CompletionController />
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