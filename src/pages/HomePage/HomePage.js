import React from 'react'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section className="vh-100 login">
        <h1 className="heading text-center">YCP DATABASE MANAGEMENT</h1>
        <div style={{height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Are You <NavLink to='/student-login'>Student</NavLink> or <NavLink to='/admin-login'>Admin</NavLink>?</h1>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default HomePage
