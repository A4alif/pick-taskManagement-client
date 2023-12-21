import React from 'react'
import Banner from './Banner/Banner'
import { Helmet } from 'react-helmet-async'
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Pick | Home</title>
    </Helmet>
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <Feature />
        </div>
      </div>
    </>
  )
}

export default Home