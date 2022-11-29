import React from 'react'

const MenuBar = ({menuActive}) => {
  return (
    <div className={menuActive ? "menu-slide-nav" : "menu-slide-closed"}>
        <h3>Other Games I've Created</h3>

        <a href="#">game 1</a>
        <a href="#">game 2</a>

    </div>
  )
}

export default MenuBar