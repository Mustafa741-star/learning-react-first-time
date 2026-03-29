import React from 'react'
import Style from './Header.module.css'

const Header = () => {
  return (
    <div className={Style.header}>
      <h3 className={Style.heading}>Mustafa</h3>
      <button className= {Style.loginBtn}>Login</button>
    </div>
  )
}

export default Header
