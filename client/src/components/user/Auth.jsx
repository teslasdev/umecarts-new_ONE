import React from 'react'
import Layout from '../layout/Layout'
import SellerLogin from './SellerLogin'
import BuyerLogin from './BuyerLogin'
import ForgotPassword from './ForgotPassword'

const Auth = (props) => {
    return (
        <>
            <Layout>
                {props.auth === 'buyer' ? <BuyerLogin/> : <SellerLogin/>}
                {props.auth === 'forget' ? <ForgotPassword /> : ''}
            </Layout>
        </>
      )
}

export default Auth