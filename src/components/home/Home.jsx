import React from 'react'
import Layout from '../layout/Layout'
import Banner from './banner/Banner'
import Banner2 from './banner/Banner2'
import Banner3 from './banner/Banner3'
import Category from './product/Category'
import Feature from './product/Feature'
import Feature1 from './product/Feature1'


const Home = () => {
  return (
    <div>
        <>
            <Layout>
              <div className='sm:px-32 px py-8'>
                <Banner />
                <Banner2 />
                <Feature />
                <Banner2 />
                <Feature1 />
                <Feature />
                <Banner3 />
                <Category />
                <Feature />
                <Feature />
              </div>
            </Layout>
        </>
    </div>
  )
}

export default Home