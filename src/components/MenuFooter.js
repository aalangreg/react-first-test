import React from 'react'
import Menu from './Menu'

export default function MenuFooter() {
  return (
    <div className="row"> 
      <div className="col-6">
        <Menu />
      </div>
      <div className="col-6"> 
        <a href="#accueil">Mission</a>
        <br/>
        <a href="#a-propos">Objectifs</a>
        <br/>
        <a href="#contact">À propos</a>
        <br/>
      </div>

    {/* <h3>MenuFooter</h3> */} 
    </div>
  )
}
