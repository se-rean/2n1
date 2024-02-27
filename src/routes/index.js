import React, { useState } from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import About from '../pages/landing-page/About'
import Services from '../pages/landing-page/Services'
import { Fragment } from 'react'
import LandingPage from './landing' 
import Wrapper from './Wrapper'
import BlogPost from '../pages/BlogPost'

const AppRoute = () => {
  const RouteLinks = [
    { path: '/about', page: <About /> },
    { path: '/services', page: <Services /> },
    { path: '/blog', page: <BlogPost /> },
    { path: '/', page: <LandingPage /> }
  ]


  return <>
    <BrowserRouter> 
      <Routes>
       
        {
          RouteLinks.map((r, i) => (
            <Fragment key={i}>
              <Route 
                key={i}
                path={r.path}
                element={<Wrapper>{r.page}</Wrapper>}
              />
            </Fragment>
          ))
        }
        <Route 
          path='*'
          element={<Wrapper><h1>Page not found</h1></Wrapper>}
        />
      </Routes>
    </BrowserRouter>
  </>
}

export default AppRoute